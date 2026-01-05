import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types';
import { getRelativeTime } from '@/services/blogService';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  if (variant === 'featured') {
    return (
      <article className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e7ebf3] bg-surface-light shadow-sm transition-all hover:shadow-md dark:bg-surface-dark dark:border-gray-800 md:flex-row">
        <div className="md:w-3/5 overflow-hidden">
          <div
            className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 md:h-full min-h-[320px]"
            style={{ backgroundImage: `url('${post.featuredImage}')` }}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4 p-6 md:p-10">
          <div className="flex items-center gap-3">
            <span className="rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary uppercase tracking-wider">
              {post.category.name}
            </span>
            <span className="text-xs text-text-secondary flex items-center gap-1">
              {/* <span className="material-symbols-outlined text-[14px]">
                calendar_today
              </span> */}
              {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-tight text-text-main md:text-3xl group-hover:text-primary transition-colors">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="line-clamp-3 text-base text-text-secondary">
            {post.excerpt}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <img
                alt={post.author.name}
                className="h-full w-full object-cover"
                src={post.author.avatar}
              />
            </div>
            <span className="text-sm font-medium text-text-main">
              {post.author.name}
            </span>
            <span className="text-text-secondary">•</span>
            <span className="text-sm text-text-secondary">
              {post.readTime} phút đọc
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#e7ebf3] bg-surface-light shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-surface-dark dark:border-gray-800">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${post.featuredImage}')` }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-primary">
            {post.category.name}
          </span>
          <span className="text-xs text-text-secondary">
            {getRelativeTime(post.publishedAt)}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold leading-tight text-text-main group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-text-secondary line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-bold text-primary hover:underline"
        >
          Đọc tiếp{' '}
          {/* <span className="material-symbols-outlined text-[16px] ml-1">
            arrow_forward
          </span> */}
        </Link>
      </div>
    </article>
  );
};
