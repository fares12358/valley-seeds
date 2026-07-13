import { useState, useEffect, useCallback } from "react";
import { getSection, updateSection } from "@/services/content.service";
import { invalidateTranslationCache } from "@/i18n/index";
import toast from "react-hot-toast";

/**
 * ARCHITECTURE NOTE — Dual State:
 * useSection owns the "server truth" copy (last saved state).
 * SectionForm owns its own formData copy (live editing state).
 * onSave(formData) passes SectionForm's copy to save(payload) here
 * so the hook saves what the user typed, not what was last fetched.
 * This is intentional — do not merge these into one state.
 *
 * save(payload?) — payload is the form's local copy passed from SectionForm.
 * Falls back to hook's internal data only when called programmatically
 * without a form (e.g. keyboard shortcut or auto-save).
 */
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

      // Bust the i18n cache so the public site picks up fresh content on next visit
      invalidateTranslationCache();

      toast.success("Saved successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Save failed");
      throw err;
    }
  }, [data, section]);

  return { data, loading, error, isDirty, setField, setImages, save };
}
