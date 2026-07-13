import { useState, useEffect, useCallback } from "react";
import { getSection, updateSection } from "@/services/content.service";
import toast from "react-hot-toast";

export function useSection(section) {
  const [data,      setData]      = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);

  const isDirty = data !== null && JSON.stringify(data) !== JSON.stringify(savedData);

  // Fetch on mount
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getSection(section)
      .then((result) => {
        if (cancelled) return;
        const initial = {
          en:     result.en     || {},
          ar:     result.ar     || {},
          images: result.images || [],
        };
        setData(initial);
        setSavedData(initial);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.response?.data?.message || "Failed to load content");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [section]);

  const setField = useCallback((lang, key, value) => {
    setData((prev) => ({
      ...prev,
      [lang]: { ...prev?.[lang], [key]: value },
    }));
  }, []);

  const setImages = useCallback((images) => {
    setData((prev) => ({ ...prev, images }));
  }, []);

  /**
   * save(payload?) — accepts an optional payload from SectionForm.
   * SectionForm owns its own formData copy and passes it here on save.
   * If no payload given, falls back to the hook's own data state.
   */
  const save = useCallback(async (payload) => {
    const toSave = payload || data;
    if (!toSave) return;
    try {
      const updated = await updateSection(section, toSave);
      const saved = {
        en:     updated.en     || {},
        ar:     updated.ar     || {},
        images: updated.images || [],
      };
      setData(saved);
      setSavedData(saved);
      toast.success("Saved successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Save failed");
      throw err;
    }
  }, [data, section]);

  return { data, loading, error, isDirty, setField, setImages, save };
}
