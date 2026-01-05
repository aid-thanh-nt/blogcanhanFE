import { postsApi, categoriesApi, commentsApi } from './api';
import type { BlogPost, Category, Comment } from '@/types';

// Get all blog posts
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await postsApi.getAll({ limit: 100 });
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Get featured posts
export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await postsApi.getAll({ featured: true, limit: 10 });
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
};

// Get latest posts
export const getLatestPosts = async (
  limit: number = 3
): Promise<BlogPost[]> => {
  try {
    const response = await postsApi.getAll({ limit, page: 1 });
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
};

// Get post by slug
export const getPostBySlug = async (
  slug: string
): Promise<BlogPost | undefined> => {
  try {
    const response = await postsApi.getBySlug(slug);

    // Increment view count (fire and forget)
    postsApi.incrementView(slug).catch(() => {});

    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return undefined;
  }
};

// Get posts by category
export const getPostsByCategory = async (
  categorySlug: string
): Promise<BlogPost[]> => {
  try {
    if (categorySlug === 'all') {
      const response = await postsApi.getAll({ limit: 100 });
      return response.data.posts;
    }
    const response = await postsApi.getAll({
      category: categorySlug,
      limit: 100,
    });
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
};

// Search posts
export const searchPosts = async (query: string): Promise<BlogPost[]> => {
  try {
    const response = await postsApi.getAll({ search: query, limit: 50 });
    return response.data.posts;
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
};

// Get all categories
export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await categoriesApi.getAll();
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Get related posts (same category, excluding current post)
export const getRelatedPosts = async (
  postSlug: string,
  limit: number = 3
): Promise<BlogPost[]> => {
  try {
    const response = await postsApi.getRelated(postSlug, limit);
    return response.data;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
};

// Get comments for a post
export const getCommentsByPostId = async (
  postId: string
): Promise<Comment[]> => {
  try {
    const response = await commentsApi.getByPostId(postId);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Calculate relative time
export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Hôm nay';
  if (diffInDays === 1) return 'Hôm qua';
  if (diffInDays < 7) return `${diffInDays} ngày trước`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} tuần trước`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} tháng trước`;
  return `${Math.floor(diffInDays / 365)} năm trước`;
};
