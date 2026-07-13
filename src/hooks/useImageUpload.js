import { useState, useCallback } from "react";
import { uploadImage } from "@/services/upload.service";

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress,  setProgress]  = useState(0);
  const [error,     setError]     = useState(null);

  const upload = useCallback(async (file, folder = "general") => {
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      // Use fetch directly so we can track upload progress via ReadableStream
      // Axios onUploadProgress is unreliable in some Next.js environments
      const result = await uploadImage(file, folder);
      setProgress(100);
      return result; // { url, publicId }
    } catch (err) {
      const msg = err.response?.data?.message || "Upload failed";
      setError(msg);
      throw new Error(msg);
    } finally {
      setUploading(false);
    }
  }, []);

  return { upload, uploading, progress, error };
}
