import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getPostBySlug,
  getRelatedPosts,
  getCommentsByPostId,
  formatDate,
} from '@/services/blogService';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import type { BlogPost, Comment } from '@/types';

export const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Fetch post
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);

        // Fetch related posts and comments if post exists
        if (fetchedPost) {
          const [fetchedRelatedPosts, fetchedComments] = await Promise.all([
            getRelatedPosts(fetchedPost.slug, 3),
            getCommentsByPostId(fetchedPost.id),
          ]);
          setRelatedPosts(fetchedRelatedPosts);
          setComments(fetchedComments);
        }
      } catch (error) {
        console.error('Error fetching blog detail data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Không tìm thấy bài viết
          </h1>
          <Link to="/blog" className="text-primary hover:underline">
            Quay lại danh sách bài viết
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen">
      <article className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 items-center mb-6 text-sm">
          <Link
            to="/"
            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium"
          >
            Trang chủ
          </Link>
          <span className="text-slate-300 dark:text-slate-600 font-medium">
            /
          </span>
          <Link
            to="/blog"
            className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-medium"
          >
            Bài viết
          </Link>
          <span className="text-slate-300 dark:text-slate-600 font-medium">
            /
          </span>
          <span className="text-slate-900 dark:text-white font-medium">
            {post.category.name}
          </span>
        </div>

        {/* Page Heading & Meta */}
        <div className="mb-8 max-w-4xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            {post.category.name}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm md:text-base border-t border-b border-slate-200 dark:border-slate-700 py-4">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.author.avatar}')` }}
              />
              <span className="font-semibold text-slate-900 dark:text-white">
                {post.author.name}
              </span>
            </div>
            <span className="text-slate-300">•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">
                schedule
              </span>
              <span>{post.readTime} phút đọc</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full mb-12">
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url('${post.featuredImage}')` }}
            />
          </div>
        </div>

        {/* Content Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Post Body */}
            <div
              className="prose dark:prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags & Share */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 border-t border-b border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500">
                  Chia sẻ:
                </span>
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    share
                  </span>
                </button>
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    thumb_up
                  </span>
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Bình luận ({comments.length})
              </h3>

              {/* Comment Form */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
                <h4 className="text-lg font-semibold mb-4 dark:text-white">
                  Để lại bình luận
                </h4>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <textarea
                      className="w-full p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px] text-slate-900 dark:text-white placeholder-slate-400 mb-3"
                      placeholder="Viết suy nghĩ của bạn..."
                    />
                    <div className="flex justify-end">
                      <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors shadow-sm">
                        Gửi bình luận
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment List */}
              <div className="space-y-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div
                      className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${comment.author.avatar}')`,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-bold text-slate-900 dark:text-white">
                          {comment.author.name}
                        </h5>
                        <span className="text-xs text-slate-500">
                          {comment.createdAt}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">
                        {comment.content}
                      </p>
                      <button className="text-xs font-semibold text-slate-500 hover:text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          reply
                        </span>{' '}
                        Trả lời
                      </button>

                      {/* Replies */}
                      {comment.replies &&
                        comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="flex gap-4 mt-4 ml-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                          >
                            <div
                              className="h-8 w-8 shrink-0 rounded-full bg-cover bg-center"
                              style={{
                                backgroundImage: `url('${reply.author.avatar}')`,
                              }}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                                  {reply.author.name}
                                </h5>
                                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                                  Tác giả
                                </span>
                                <span className="text-xs text-slate-500 ml-auto">
                                  {reply.createdAt}
                                </span>
                              </div>
                              <p className="text-slate-600 dark:text-slate-300 text-sm">
                                {reply.content}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Table of Contents */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 sticky top-24">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  list
                </span>
                Mục lục
              </h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <a
                  className="text-primary font-medium pl-2 border-l-2 border-primary"
                  href="#"
                >
                  Giới thiệu
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary pl-2 border-l-2 border-transparent transition-colors"
                  href="#"
                >
                  Nội dung chính
                </a>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="p-6 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
              <h3 className="font-bold text-xl mb-2">Đăng ký nhận tin</h3>
              <p className="text-blue-100 text-sm mb-4">
                Nhận bài viết mới nhất mỗi tuần.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full rounded-lg px-3 py-2 text-slate-900 border-none focus:ring-2 focus:ring-white/50 text-sm placeholder:text-slate-400"
                  placeholder="Email của bạn"
                  type="email"
                />
                <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Bài viết liên quan
              </h2>
              <Link
                to="/blog"
                className="text-primary font-medium hover:underline flex items-center gap-1"
              >
                Xem tất cả{' '}
                {/* <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span> */}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
};
