import axios from 'axios';

// Tạo một instance dùng chung
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // nên luôn dùng biến môi trường
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Optional: Interceptors để gắn token tự động (nếu có)
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Interceptors để xử lý lỗi response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Ví dụ: Token hết hạn hoặc lỗi 401 → logout
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
