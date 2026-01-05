export const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-12 px-4">
      <div className="w-full max-w-[800px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            Về tác giả
          </h1>
          <p className="text-lg text-text-secondary">Xin chào! Mình là Thành</p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div
            className="w-48 h-48 rounded-full bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBotAm5yrLZGcEO5XR84UZ2C5BWyzygYSlTLeOjunvIvFlaQBE67xoOop5TUSy034gg4K3SkTjKGIc8AMd5E-qTG-0bBKg3no9OBa_lvY_0le0eXB4lPKSFjpJit_q1EfEhwx8IMD9k2RzK0Kqmx3_e25dJM9lr6B1F6Uk3xICVEgKrIG2Zbw1s30YkE2J80Tf8LzLyZJS9XBNMqVE-KQkT6MtAvqGkM9PdDueRAW7k26IbbDblPMIVzMQLPhCI5qJoVpiaAcLRLwk')",
            }}
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-text-main mb-4">
              Thành Nguyễn
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Full-stack developer và blogger về công nghệ, cuộc sống. Mình yêu
              thích việc học hỏi những điều mới và chia sẻ kiến thức với cộng
              đồng.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="text-primary hover:underline">
                GitHub
              </a>
              <a href="#" className="text-primary hover:underline">
                Twitter
              </a>
              <a href="#" className="text-primary hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          <h2>Câu chuyện của tôi</h2>
          <p>
            Mình bắt đầu hành trình lập trình từ năm 2018. Từ một người hoàn
            toàn không biết gì về code, mình đã tự học và phát triển bản thân
            qua các dự án thực tế.
          </p>

          <h2>Tại sao mình viết blog?</h2>
          <p>
            Blog này là nơi mình ghi lại những kiến thức đã học, những trải
            nghiệm trong cuộc sống, và những suy nghĩ cá nhân. Mình hy vọng
            những chia sẻ này sẽ hữu ích cho bạn.
          </p>

          <h2>Kỹ năng</h2>
          <ul>
            <li>Frontend: React, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, Python</li>
            <li>Database: PostgreSQL, MongoDB</li>
            <li>Tools: Git, Docker, VS Code</li>
          </ul>

          <h2>Liên hệ</h2>
          <p>
            Nếu bạn muốn kết nối hoặc có câu hỏi, đừng ngần ngại liên hệ với
            mình qua trang <a href="/contact">Liên hệ</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
