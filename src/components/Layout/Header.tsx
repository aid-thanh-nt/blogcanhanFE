import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-surface-light/90 backdrop-blur-md dark:bg-surface-dark/90 dark:border-gray-800">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-text-main hover:opacity-80 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              {/* <span className="material-symbols-outlined text-xl">
                  edit_note
                </span> */}
            </div>
            <span className="text-xl font-bold tracking-tight">
              Thành's Blog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Bài viết
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Giới thiệu
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Liên hệ
            </Link>
          </nav>
        </div>

        {/* Right Side: Search & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative items-center">
            {/* <span className="material-symbols-outlined absolute left-3 text-text-secondary text-[20px]">
              search
            </span> */}
            <input
              className="h-9 w-48 rounded-lg border-none bg-background-light pl-9 text-sm text-text-main focus:ring-2 focus:ring-primary/20 dark:bg-background-dark dark:text-white placeholder:text-text-secondary/70"
              placeholder="Tìm kiếm..."
              type="text"
            />
          </div>
          <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-colors">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};
