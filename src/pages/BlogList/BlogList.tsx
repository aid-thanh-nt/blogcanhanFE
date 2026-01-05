import { useState, useEffect } from 'react';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { getAllCategories, getPostsByCategory } from '@/services/blogService';
import type { BlogPost, Category } from '@/types';

export const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getAllCategories();
      setCategories(cats);
    };
    fetchCategories();
  }, []);

  // Fetch posts when category changes
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await getPostsByCategory(selectedCategory);
      setFilteredPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, [selectedCategory]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);
  return (
    <main className="flex-grow flex flex-col items-center py-6 md:py-10 px-4 md:px-10">
      <div className="w-full max-w-[1024px] flex flex-col gap-10">
        {/* Hero / Featured Post */}
        {featuredPost && (
          <section className="@container w-full">
            <BlogCard post={featuredPost} variant="featured" />
          </section>
        )}

        {/* Page Heading & Filters */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#e7ebf3] dark:border-gray-800 pb-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                Bài Viết Mới Nhất
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-normal">
                Khám phá các bài viết về công nghệ, đời sống và chia sẻ cá nhân.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-auto min-w-[300px]">
              <label className="flex items-center h-12 w-full rounded-lg bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
                <input
                  className="flex w-full bg-transparent border-none focus:ring-0 text-base p-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 font-sans"
                  placeholder="Tìm kiếm bài viết..."
                />
              </label>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={function () {
                return setSelectedCategory('all');
              }}
              className={'flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-all '.concat(
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 hover:border-primary hover:text-primary'
              )}
            >
              <span className="text-sm font-medium">Tất cả</span>
            </button>
            {categories.map(function (category) {
              return (
                <button
                  key={category.id}
                  onClick={function () {
                    return setSelectedCategory(category.slug);
                  }}
                  className={'flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-all '.concat(
                    selectedCategory === category.slug
                      ? 'bg-primary text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 hover:border-primary hover:text-primary'
                  )}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map(function (post) {
            return <BlogCard key={post.id} post={post} />;
          })}
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </div>
    </main>
  );
};
