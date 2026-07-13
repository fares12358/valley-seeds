import api from "./api.js";

export const uploadImage = async (file, folder = "general") => {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await api.post(`/upload/image?folder=${folder}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.data; // { url, publicId }
};

export const deleteImage = async (publicId) => {
  await api.delete("/upload/image", { data: { publicId } });
};
