export const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-12 px-4">
      <div className="w-full max-w-[600px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            Liên hệ
          </h1>
          <p className="text-lg text-text-secondary">
            Có câu hỏi hoặc muốn kết nối? Hãy gửi tin nhắn cho mình!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-[#e7ebf3] dark:border-gray-800 p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">
                Tên của bạn
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-text-main focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-main mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-text-main focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-main mb-2">
                Chủ đề
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-text-main focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Tôi muốn hỏi về..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-main mb-2">
                Tin nhắn
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-text-main focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Viết tin nhắn của bạn..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors shadow-md"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-text-main mb-4">
            Hoặc liên hệ qua
          </h2>
          <div className="flex flex-col gap-3 items-center">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
              <span>contact@example.com</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">public</span>
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
