import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#e7ebf3] bg-surface-light py-10 dark:bg-surface-dark dark:border-gray-800">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            {/* <span className="material-symbols-outlined text-primary">
              edit_note
            </span> */}
            <span className="text-lg font-bold text-text-main">
              Thành's Blog
            </span>
          </div>
          <p className="text-sm text-text-secondary">
            © 2024 Thành's Blog. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            to="/about"
            className="text-sm font-medium text-text-secondary hover:text-primary"
          >
            Về tác giả
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-text-secondary hover:text-primary"
          >
            Điều khoản
          </a>
          <Link
            to="/contact"
            className="text-sm font-medium text-text-secondary hover:text-primary"
          >
            Liên hệ
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-text-secondary hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
          >
            <span className="material-symbols-outlined text-[18px]">
              public
            </span>
          </a>
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-text-secondary hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat_bubble
            </span>
          </a>
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-text-secondary hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
          >
            <span className="material-symbols-outlined text-[18px]">
              photo_camera
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
