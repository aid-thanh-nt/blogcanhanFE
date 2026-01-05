import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { getFeaturedPosts, getLatestPosts } from '@/services/blogService';
import type { BlogPost } from '@/types';

export const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [featured, latest] = await Promise.all([
          getFeaturedPosts(),
          getLatestPosts(3),
        ]);
        setFeaturedPosts(featured);
        setLatestPosts(latest);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const featuredPost = featuredPosts[0];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {/* <span className="material-symbols-outlined text-[16px]">
                waving_hand
              </span> */}
              <span>Xin chào, mình là Thành</span>
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-text-main sm:text-5xl lg:text-6xl">
              Chào mừng đến với không gian chia sẻ của tôi
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Nơi tôi viết về công nghệ, cuộc sống và những chuyến đi. Hy vọng
              bạn tìm thấy điều gì đó thú vị và hữu ích ở đây để áp dụng vào
              cuộc sống của chính mình.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/blog"
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-md hover:bg-primary/90 transition-transform hover:-translate-y-0.5"
              >
                Đọc bài viết mới nhất
              </Link>
              <Link
                to="/about"
                className="flex h-12 items-center justify-center rounded-lg bg-white border border-gray-200 px-6 text-base font-bold text-text-main shadow-sm hover:bg-gray-50 transition-colors dark:bg-surface-dark dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                Về tác giả
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div
              className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBotAm5yrLZGcEO5XR84UZ2C5BWyzygYSlTLeOjunvIvFlaQBE67xoOop5TUSy034gg4K3SkTjKGIc8AMd5E-qTG-0bBKg3no9OBa_lvY_0le0eXB4lPKSFjpJit_q1EfEhwx8IMD9k2RzK0Kqmx3_e25dJM9lr6B1F6Uk3xICVEgKrIG2Zbw1s30YkE2J80Tf8LzLyZJS9XBNMqVE-KQkT6MtAvqGkM9PdDueRAW7k26IbbDblPMIVzMQLPhCI5qJoVpiaAcLRLwk')",
              }}
            />
          </div>
        </div>
      </section>

      {/* Featured Section Header */}
      <section className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between border-b border-[#e7ebf3] pb-4 dark:border-gray-800">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-main flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">star</span>
            Bài Viết Nổi Bật
          </h2>
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Xem tất cả{' '}
            {/* <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span> */}
          </Link>
        </div>
      </section>

      {/* Featured Card (Large) */}
      {featuredPost && (
        <section className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8">
          <BlogCard post={featuredPost} variant="featured" />
        </section>
      )}

      {/* Latest Posts Header */}
      <section className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between border-b border-[#e7ebf3] pb-4 dark:border-gray-800">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-main flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              schedule
            </span>
            Bài Viết Mới Nhất
          </h2>
        </div>
      </section>

      {/* Latest Posts Grid */}
      <section className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};
