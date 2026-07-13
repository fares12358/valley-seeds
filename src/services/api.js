import axios from "axios";

const api = axios.create({
  baseURL:         process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true,
  timeout:         10000,
});

// 401 interceptor — redirect to login ONLY when not already on a public auth page
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      typeof window !== "undefined"
    ) {
      const isAuthPage =
        window.location.pathname.includes("/dashboard/login") ||
        window.location.pathname.includes("/dashboard/forgot-password") ||
        window.location.pathname.includes("/dashboard/reset-password");

      if (!isAuthPage) {
        window.location.href = "/dashboard/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
