import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:3000/api/v1';
const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 10000;

// Custom API client interface that returns unwrapped data
interface CustomAxiosInstance
  extends Omit<AxiosInstance, 'get' | 'post' | 'put' | 'patch' | 'delete'> {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      // Server responded with error
      const errorData = error.response.data;
      console.error('API Error:', errorData);

      // Handle specific error codes
      if (error.response.status === 401) {
        // Unauthorized - clear token and redirect to login
        localStorage.removeItem('authToken');
        // You can add redirect logic here
      }

      return Promise.reject(errorData);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.request);
      return Promise.reject({
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message:
            'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.',
        },
      });
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject({
        success: false,
        error: {
          code: 'UNKNOWN_ERROR',
          message: 'Đã xảy ra lỗi không xác định.',
        },
      });
    }
  }
);

// Cast to CustomAxiosInstance to reflect the response interceptor behavior
const apiClient = axiosInstance as unknown as CustomAxiosInstance;

export default apiClient;

// Helper function for file upload
export const uploadFile = async (
  file: File,
  endpoint: string = '/upload/image'
) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await apiClient.post(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
