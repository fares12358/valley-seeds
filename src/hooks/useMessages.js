import { useState, useEffect, useCallback } from "react";
import { getMessages, setReadState, deleteMessage } from "@/services/contact.service";

export function useMessages() {
  const [messages,    setMessages]    = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getMessages();
      setMessages(result.messages);
      setUnreadCount(result.unreadCount);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchMessages(); }, [fetchMessages]);

  // Mark a message as read
  const markRead = useCallback(async (id) => {
    const msg = messages.find((m) => m._id === id);
    if (!msg || msg.read) return; // already read — skip
    try {
      await setReadState(id, true);
      setMessages((prev) => prev.map((m) => m._id === id ? { ...m, read: true } : m));
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (err) {
      console.error("markRead failed:", err.message);
    }
  }, [messages]);

  // Toggle read ↔ unread
  const toggleRead = useCallback(async (id) => {
    const msg = messages.find((m) => m._id === id);
    if (!msg) return;
    const newRead = !msg.read;
    try {
      await setReadState(id, newRead);
      setMessages((prev) => prev.map((m) => m._id === id ? { ...m, read: newRead } : m));
      setUnreadCount((prev) => newRead
        ? Math.max(0, prev - 1)  // marked as read → unread count decreases
        : prev + 1               // marked as unread → unread count increases
      );
    } catch (err) {
      console.error("toggleRead failed:", err.message);
    }
  }, [messages]);

  const deleteMsg = useCallback(async (id) => {
    const msg = messages.find((m) => m._id === id);
    try {
      await deleteMessage(id);
      setMessages((prev) => prev.filter((m) => m._id !== id));
      if (msg && !msg.read) setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (err) {
      console.error("deleteMsg failed:", err.message);
      throw err;
    }
  }, [messages]);

  return { messages, loading, error, unreadCount, markRead, toggleRead, deleteMsg, refetch: fetchMessages };
}
