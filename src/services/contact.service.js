import api from "./api.js";

export const getMessages = async (params = {}) => {
  const { data } = await api.get("/contact/messages", { params });
  return data.data; // { messages, total, unreadCount }
};

export const markRead = async (id) => {
  const { data } = await api.patch(`/contact/messages/${id}`, { read: true });
  return data.data;
};

export const deleteMessage = async (id) => {
  await api.delete(`/contact/messages/${id}`);
};

// Used by public website ContactSection
export const submitContact = async (formData) => {
  await api.post("/contact", formData);
};
