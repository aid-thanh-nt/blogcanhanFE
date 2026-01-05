import apiClient from '@/config/apiClient';
import type { BlogPost, Category, Comment } from '@/types';

// API Response types
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: {
    code: string;
    message: string;
  };
}

interface PaginatedResponse<T> {
  posts: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Blog Posts API
export const postsApi = {
  // Get all posts with filters
  getAll: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    featured?: boolean;
    search?: string;
  }): Promise<ApiResponse<PaginatedResponse<BlogPost>>> => {
    return apiClient.get('/posts', { params });
  },

  // Get post by slug
  getBySlug: async (slug: string): Promise<ApiResponse<BlogPost>> => {
    return apiClient.get(`/posts/${slug}`);
  },

  // Get related posts by slug
  getRelated: async (
    slug: string,
    limit: number = 3
  ): Promise<ApiResponse<BlogPost[]>> => {
    return apiClient.get(`/posts/${slug}/related`, { params: { limit } });
  },

  // Get popular posts
  getPopular: async (limit: number = 5): Promise<ApiResponse<BlogPost[]>> => {
    return apiClient.get('/posts/popular', { params: { limit } });
  },

  // Search suggestions (autocomplete)
  searchSuggestions: async (
    query: string,
    limit: number = 5
  ): Promise<ApiResponse<Array<{ title: string; slug: string }>>> => {
    return apiClient.get('/posts/search/suggestions', {
      params: { q: query, limit },
    });
  },

  // Increment view count
  incrementView: async (
    slug: string
  ): Promise<ApiResponse<{ views: number }>> => {
    return apiClient.post(`/posts/${slug}/view`);
  },

  // Admin: Create post
  create: async (data: Partial<BlogPost>): Promise<ApiResponse<BlogPost>> => {
    return apiClient.post('/posts', data);
  },

  // Admin: Update post
  update: async (
    id: string,
    data: Partial<BlogPost>
  ): Promise<ApiResponse<BlogPost>> => {
    return apiClient.put(`/posts/${id}`, data);
  },

  // Admin: Delete post
  delete: async (id: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/posts/${id}`);
  },
};

// Categories API
export const categoriesApi = {
  // Get all categories
  getAll: async (): Promise<ApiResponse<Category[]>> => {
    return apiClient.get('/categories');
  },

  // Admin: Create category
  create: async (data: {
    name: string;
    description?: string;
  }): Promise<ApiResponse<Category>> => {
    return apiClient.post('/categories', data);
  },

  // Admin: Update category
  update: async (
    id: string,
    data: Partial<Category>
  ): Promise<ApiResponse<Category>> => {
    return apiClient.put(`/categories/${id}`, data);
  },

  // Admin: Delete category
  delete: async (id: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/categories/${id}`);
  },
};

// Comments API
export const commentsApi = {
  // Get comments for a post
  getByPostId: async (postId: string): Promise<ApiResponse<Comment[]>> => {
    return apiClient.get(`/posts/${postId}/comments`);
  },

  // Create comment
  create: async (
    postId: string,
    data: {
      author: { name: string; email: string; avatar?: string };
      content: string;
      parentId?: string;
    }
  ): Promise<ApiResponse<Comment>> => {
    return apiClient.post(`/posts/${postId}/comments`, data);
  },

  // Admin: Get latest comments
  getLatest: async (limit: number = 5): Promise<ApiResponse<Comment[]>> => {
    return apiClient.get('/comments/latest', { params: { limit } });
  },

  // Admin: Delete comment
  delete: async (id: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/comments/${id}`);
  },
};

// Newsletter API
export const newsletterApi = {
  // Subscribe to newsletter
  subscribe: async (
    email: string
  ): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.post('/newsletter/subscribe', { email });
  },

  // Unsubscribe from newsletter
  unsubscribe: async (
    email: string
  ): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.post('/newsletter/unsubscribe', { email });
  },

  // Admin: Get subscribers
  getSubscribers: async (): Promise<
    ApiResponse<Array<{ email: string; subscribedAt: string }>>
  > => {
    return apiClient.get('/newsletter/subscribers');
  },
};

// Author API
export const authorApi = {
  // Get author info
  get: async (): Promise<
    ApiResponse<{
      id: string;
      name: string;
      avatar: string;
      bio: string;
      socialLinks?: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        facebook?: string;
        email?: string;
      };
    }>
  > => {
    return apiClient.get('/author');
  },

  // Admin: Update author info
  update: async (data: any): Promise<ApiResponse<any>> => {
    return apiClient.put('/author', data);
  },
};

// Contact API
export const contactApi = {
  // Send contact message
  send: async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.post('/contact', data);
  },

  // Admin: Get messages
  getMessages: async (): Promise<ApiResponse<any[]>> => {
    return apiClient.get('/contact/messages');
  },

  // Admin: Mark message as read
  markAsRead: async (id: string): Promise<ApiResponse<void>> => {
    return apiClient.patch(`/contact/messages/${id}/read`);
  },
};

// Auth API
export const authApi = {
  // Register
  register: async (data: {
    email: string;
    password: string;
    name: string;
  }): Promise<ApiResponse<{ user: any; token: string }>> => {
    return apiClient.post('/auth/register', data);
  },

  // Login
  login: async (data: {
    email: string;
    password: string;
  }): Promise<ApiResponse<{ user: any; token: string }>> => {
    const response = await apiClient.post('/auth/login', data);

    // Save token to localStorage
    if (response.success && response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }

    return response;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('authToken');
  },
};
