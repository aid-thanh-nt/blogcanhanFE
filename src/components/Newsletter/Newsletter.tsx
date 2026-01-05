export const Newsletter = () => {
  return (
    <section className="w-full bg-[#eef2f6] dark:bg-[#1a2233] mt-16 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-xl">Email</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-text-main">
          Đăng ký nhận tin mới
        </h2>
        <p className="mb-8 text-text-secondary">
          Nhận thông báo về các bài viết mới nhất trực tiếp vào hộp thư của bạn.
          Không spam, mình hứa!
        </p>
        <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-background-dark dark:text-white"
            placeholder="Email của bạn..."
            required
            type="email"
          />
          <button
            className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-colors"
            type="button"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
};
