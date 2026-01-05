import type { Author, Category, BlogPost, Comment } from '@/types';

// Authors
export const authors: Author[] = [
  {
    id: '1',
    name: 'Thành Nguyễn',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIGg7ZETg-aIbxhMJb9Wxz-7n0QF6fQObuav5sy99E3uD00lA8SEzeTPXm8LpZR6EmLwXP-hrAdyJNnzs6BUjg5-baHpAn_7E5RaemrsC4tOO538v56sv0RDynrQhwbvMTzHTaeEH_C5hu7YLdEnkOgkM5Coq-mUpXRZchNTKg2EUU8eUpzOx5bRvEtAPww2HEF5NvDzU3YJ_xorfeHiYmolLFdtKGSgNSOaQnDnH4FbmGSQPsWYpjlJ32fo_LE9F-G74jvzrhAgg',
    bio: 'Full-stack developer và blogger về công nghệ, cuộc sống.',
  },
];

// Categories
export const categories: Category[] = [
  { id: '1', name: 'Công nghệ', slug: 'tech' },
  { id: '2', name: 'Lối sống', slug: 'lifestyle' },
  { id: '3', name: 'Du lịch', slug: 'travel' },
  { id: '4', name: 'Phát triển bản thân', slug: 'personal-development' },
  { id: '5', name: 'Tutorials', slug: 'tutorials' },
  { id: '6', name: 'Review', slug: 'review' },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cach-xay-dung-thoi-quen-doc-sach',
    title: 'Cách Xây Dựng Thói Quen Đọc Sách Mỗi Ngày: Bí Quyết Từ Chuyên Gia',
    excerpt:
      'Đọc sách không chỉ là tiếp thu kiến thức mà còn là cách rèn luyện sự tập trung và tư duy sâu sắc. Trong bài viết này, mình sẽ chia sẻ những phương pháp đã giúp mình đọc được 50 cuốn sách mỗi năm...',
    content: `
      <p class="lead">Đọc sách không chỉ là tiếp thu kiến thức mà còn là cách rèn luyện sự tập trung và tư duy sâu sắc.</p>
      
      <p>Trong bài viết này, mình sẽ chia sẻ những phương pháp đã giúp mình đọc được 50 cuốn sách mỗi năm. Đây không phải là một con số khó khăn nếu bạn biết cách xây dựng thói quen đúng đắn.</p>
      
      <h2>1. Bắt đầu với mục tiêu nhỏ</h2>
      <p>Đừng đặt mục tiêu đọc 1 cuốn sách mỗi tuần ngay từ đầu. Hãy bắt đầu với 10-15 phút mỗi ngày. Sự kiên trì quan trọng hơn số lượng.</p>
      
      <h2>2. Chọn sách phù hợp</h2>
      <p>Đọc những gì bạn thích, không phải những gì người khác bảo bạn "nên" đọc. Niềm vui trong việc đọc sẽ giúp bạn duy trì thói quen lâu dài.</p>
      
      <h3>Một số thể loại đề xuất:</h3>
      <ul>
        <li><strong>Fiction:</strong> Giúp phát triển trí tưởng tượng và empathy</li>
        <li><strong>Non-fiction:</strong> Học hỏi kiến thức mới</li>
        <li><strong>Biographies:</strong> Học từ kinh nghiệm của người khác</li>
      </ul>
      
      <blockquote>
        <p>"Một người đọc sách sống hàng ngàn cuộc đời trước khi chết. Người không bao giờ đọc chỉ sống một."</p>
        <cite>— George R.R. Martin</cite>
      </blockquote>
      
      <h2>3. Tạo môi trường thuận lợi</h2>
      <p>Luôn có một cuốn sách bên cạnh. Đặt sách ở những nơi bạn thường xuyên ở: bàn làm việc, đầu giường, túi xách. Khi có thời gian rảnh, bạn sẽ tự nhiên với tay lấy sách ra đọc.</p>
      
      <p>Hy vọng những chia sẻ này sẽ giúp bạn xây dựng được thói quen đọc sách bền vững!</p>
    `,
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBl2Ufpc892OAXNXvMN9pl2PlnxTT-EDI2xno9l7V4FZ_2x8KT468LxiIEf7ahrF_0d8f-pP6k9hZO9k4cx9mUB-2bBg0qTaDDRkX0XNaFIIGONG_XbjlDvD_MIbAjPpMivho0lbN0UH-tbOdnsh_MfPybHfiW7Fpzn0HKxvVMec00Qz7DSUulFG2t7_iiQ1xlL43VnJDFEI5-SP6npTHJP1aRBu1_eGz319GwgTeFsrfc0wy_4dsqdEqLUo-PivfU_RUDUpxmSKbQ',
    category: categories[3],
    author: authors[0],
    publishedAt: '2023-10-12',
    readTime: 5,
    tags: ['đọc sách', 'thói quen', 'phát triển bản thân'],
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'xu-huong-lap-trinh-web-2024',
    title: 'Xu hướng lập trình Web năm 2024 có gì mới?',
    excerpt:
      'Khám phá những công nghệ frontend mới nhất và cách AI đang thay đổi cách chúng ta viết code hàng ngày.',
    content: `
      <p class="lead">Web development đang thay đổi nhanh chóng với sự xuất hiện của AI và các framework mới.</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>GitHub Copilot, ChatGPT và các công cụ AI khác đang thay đổi cách chúng ta viết code. Productivity tăng lên đáng kể nhưng cũng đặt ra câu hỏi về vai trò của developer.</p>
      
      <h2>2. Server Components trong React</h2>
      <p>React Server Components cho phép render components trên server, giảm bundle size và cải thiện performance đáng kể.</p>
      
      <h2>3. Edge Computing</h2>
      <p>Vercel Edge Functions, Cloudflare Workers đang làm cho việc deploy global trở nên dễ dàng hơn bao giờ hết.</p>
    `,
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNe8ymJuursp5WZhDyDJUXCrSjzPMx_iKUPwUCCascRV7-99RhsqJveRP8fPVYOAWEM1Syw2tPxoPxHgKBrcVtA4g_g3mRxT5Cys6IWKE0G7WCG97DkIAJ4Lzu28vrwdFuJAADa_U-N5NPdbjYetOt87eTuumjIXocX-AaoAwnGEFtkXHcYqosEniyfOSf5mbvNjKXBwFwmdMpVUEIgAuneRQsOA1wc6zL1rNlYdccWWvzdzfxaxh0gEiBq7jeX5L4EFef7-YH7mc',
    category: categories[0],
    author: authors[0],
    publishedAt: '2024-01-20',
    readTime: 8,
    tags: ['web development', 'AI', 'React'],
    isFeatured: false,
  },
  {
    id: '3',
    slug: 'hanh-trinh-3-ngay-ha-giang',
    title: 'Hành trình 3 ngày chinh phục cực Bắc',
    excerpt:
      'Trải nghiệm văn hóa bản địa và vẻ đẹp hùng vĩ của núi rừng Hà Giang qua lăng kính của một kẻ lữ hành.',
    content: `
      <p class="lead">Hà Giang - vùng đất của những dãy núi đá vôi hùng vĩ và văn hóa đa dạng của các dân tộc thiểu số.</p>
      
      <h2>Ngày 1: Hà Giang - Đồng Văn</h2>
      <p>Khởi hành từ sáng sớm, chúng tôi đi qua con đường Hạnh Phúc nổi tiếng. Cảnh núi non trùng điệp khiến ai cũng phải trầm trồ.</p>
      
      <h2>Ngày 2: Cao nguyên đá Đồng Văn</h2>
      <p>Thăm dinh thự họ Vương, tìm hiểu về lịch sử vùng đất này. Buổi tối nghỉ tại nhà sàn của người Mông.</p>
      
      <h2>Ngày 3: Mã Pì Lèng - Về Hà Giang</h2>
      <p>Đèo Mã Pì Lèng - một trong tứ đại đỉnh đèo của miền Bắc. Cảnh đẹp ngoạn mục khiến mọi người đều phải dừng lại chụp ảnh.</p>
    `,
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAhiASLwHr8ZCaYy05PQdhAhBqeNpE_XFtVDfXYHUzpK7rNh0onUEnMk84xIduzzp0wIwnVKZ5oTWruHB0MHRLzIialCcHVdUYf4EEusUeQihoo-y2VquVocUDkS_tFgWL2hVRGvycwP916gYs2mKFAOX3fmoJkplA8FIxiom2KKPWSqx0jDWZG_iUfncUDqJ3O_YCJGcFjglnwS835-XmGL0hoflFvqjOPnXF1mpyEykHpuNMTsYuWBWrjmxqN6g7r-dlrSo5FtWA',
    category: categories[2],
    author: authors[0],
    publishedAt: '2024-01-15',
    readTime: 6,
    tags: ['du lịch', 'Hà Giang', 'phượt'],
    isFeatured: false,
  },
  {
    id: '4',
    slug: 'minimalism-song-toi-gian',
    title: 'Minimalism: Sống tối giản không chỉ là vứt bớt đồ đạc',
    excerpt:
      'Tối giản là một tư duy giúp bạn tập trung vào những điều thực sự quan trọng và loại bỏ sự xao nhãng.',
    content: `
      <p class="lead">Minimalism không phải là về việc sống với ít đồ đạc nhất có thể, mà là về việc sống có chủ đích.</p>
      
      <h2>Minimalism là gì?</h2>
      <p>Đó là việc loại bỏ những thứ không cần thiết để tập trung vào những gì thực sự quan trọng với bạn.</p>
      
      <h2>Lợi ích của lối sống tối giản</h2>
      <ul>
        <li>Giảm stress và lo lắng</li>
        <li>Tiết kiệm thời gian và tiền bạc</li>
        <li>Tăng sự tập trung</li>
        <li>Sống có chủ đích hơn</li>
      </ul>
      
      <h2>Bắt đầu từ đâu?</h2>
      <p>Hãy bắt đầu với một khu vực nhỏ - có thể là bàn làm việc hoặc tủ quần áo. Tự hỏi bản thân: "Vật này có mang lại giá trị cho cuộc sống tôi không?"</p>
    `,
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7mKD7LyiAB1LEtMJxY7safFgcVmm2C8u-YvRpTW7N6owM8ox83GkRSLcUma2z29Y4JkG3TVtJYPhrobVXA_kCug52u9Vn0io9vwuF1ic0O5Q0A53HYdtbGgUi1DF1rvN-dk-gOeWGJfqh-3ejsUCsXLXwc52pugD2pDnIgj8lqXkeWOF5vt80Nh0R8e0P5JMrYIqhXO-4o0Nqyvn5f-bBMjVbyNCarwPZxAuAI3Tn9QIGVlmS9ewllwPsq7-fv4Wxu4ccBPqR2rI',
    category: categories[1],
    author: authors[0],
    publishedAt: '2024-01-05',
    readTime: 4,
    tags: ['minimalism', 'lối sống', 'tối giản'],
    isFeatured: false,
  },
  {
    id: '5',
    slug: 'tai-sao-tailwind-css-duoc-yeu-thich',
    title: 'Tại sao Tailwind CSS lại được yêu thích?',
    excerpt:
      'Phân tích sâu về ưu điểm của Utility-first CSS framework và lý do nó thay đổi cách chúng ta viết style.',
    content: `
      <p class="lead">Tailwind CSS đã thay đổi cách chúng ta nghĩ về việc viết CSS.</p>
      
      <h2>Utility-First Approach</h2>
      <p>Thay vì viết custom CSS cho mỗi component, Tailwind cung cấp các utility classes có thể tái sử dụng.</p>
      
      <h2>Ưu điểm</h2>
      <ul>
        <li>Không phải nghĩ tên class</li>
        <li>Không có CSS không sử dụng</li>
        <li>Dễ dàng maintain</li>
        <li>Responsive design đơn giản</li>
      </ul>
      
      <h2>Nhược điểm</h2>
      <p>HTML có thể trở nên dài dòng với nhiều classes. Tuy nhiên, với component-based frameworks như React, vấn đề này được giải quyết khá tốt.</p>
    `,
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCK6vhhV8G2ewNEbF5u0o4Tr1sagtfXbn2kwL3DowAZ5xTbfXRBixAcoJkNBoGLh-rBg_zNMH2-mHpemd_F_AUEcfnN6zjbUOb7dd5fSpSKleJ9hBXEn98jSuLottD7n3SphVsCIogA4MiMoUtnJNi9C3n3IAnba4NDBxro-pgUPQnzqWX6ABpGLEKBMxkAB75b-_n8Rwtay7vuMFsmqgkrB_ydUXVSaPtXwJntG3UdOctrZ8tjWI5HLfaxoCEVdjvuYsjRlKzCsQ4',
    category: categories[0],
    author: authors[0],
    publishedAt: '2024-01-18',
    readTime: 8,
    tags: ['CSS', 'Tailwind', 'web development'],
    isFeatured: false,
  },
  {
    id: '6',
    slug: 'nghe-thuat-ke-chuyen-trong-bai-viet-ky-thuat',
    title: 'Nghệ thuật kể chuyện trong bài viết kỹ thuật',
    excerpt:
      'Làm thế nào để biến những khái niệm khô khan thành những câu chuyện thú vị và dễ tiếp thu hơn.',
    content: `
      <p class="lead">Technical writing không nhất thiết phải khô khan và nhàm chán.</p>
      
      <h2>Tại sao storytelling quan trọng?</h2>
      <p>Con người ghi nhớ câu chuyện tốt hơn nhiều so với các facts riêng lẻ. Một bài viết kỹ thuật tốt nên kể một câu chuyện.</p>
      
      <h2>Cách áp dụng</h2>
      <p>Bắt đầu với một vấn đề thực tế, dẫn dắt người đọc qua quá trình giải quyết, và kết thúc với bài học rút ra.</p>
      
      <blockquote>
        <p>"The best documentation is the one that tells a story."</p>
      </blockquote>
    `,
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW-KVSIU4TXPpzGOBkvmPsMgtgVv1tRkEkWOxsa3EUkJqGNl5scR69IW85yMzVRRPPXKwsmllx0a9DvDihmpJj8qNwSWaYSWmoyorbuF4ryf0nqzlBUvpUNFpZKAYHzPbeTYtKxUILVozM8I694RhZPohXwmE1g0TXSvyVL3xuQFDQP11M5nFUqofDMPK9sd8W7pL9i16Hh4ibzw0ZrHvcM-4UPE04Kpj0qQK3TAyXZ9dOsHUZc8CXGeT_2F24kGIrXGkweG7GziE',
    category: categories[4],
    author: authors[0],
    publishedAt: '2024-01-10',
    readTime: 10,
    tags: ['writing', 'technical writing', 'storytelling'],
    isFeatured: false,
  },
];

// Comments
export const comments: Comment[] = [
  {
    id: '1',
    postId: '1',
    author: {
      name: 'Sarah Jenkins',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDj0zCY1dbm_ppXXBaaHihXxPUzJrFwQz9exzbHv8KE-ueClkQ_Wi_S1Y8uB4VSQUXH08FadRUD3UcPsa3mo9oBhC6lQ7i32LYxJuxneQeWeYJN86pfc3W2rAM0fQURmQLsMoqNn8Hyt7zoDUWiRLrQJrhftonbuV3uPQdbzOyKb1RGyCGe9bvcfIrJfe7tEtccDINUdvekybi1rcQqnIzc8KETr18pv7zxQpNSF5zlA-XLl-_M81sDwYg5THDjKkQdHSHvm6HJHc0',
    },
    content:
      'Bài viết rất hay! Mình cũng đang cố gắng xây dựng thói quen đọc sách.',
    createdAt: '2 giờ trước',
  },
  {
    id: '2',
    postId: '1',
    author: {
      name: 'Mike Ross',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCdg7MLCg7MSrTfsZAgP_uujbsLvZRgWQTBsl4JFL7zgVikOj1bN8xB2BF_hszcVSSZC_zqGZvIK7X6G_BqurCsda2CUZnGWBBgQwIsxamiMmDVQeZGkVNP5de8sGvc99qR33EqGlkYDGZrJ4joK_-l5QlazD5odB-u_eETJEo_I441XRYChqnKIX0fqqwTdzQg1aL7vB3CEapAfLkSEvUdz3rE-ihet1S0FgWQYNp2StwaJlQeaUgKl4YItQU0o2E1mtpZ-ZQge2A',
    },
    content: 'Cảm ơn bạn đã chia sẻ! Mình sẽ thử áp dụng những tips này.',
    createdAt: '5 giờ trước',
    replies: [
      {
        id: '3',
        postId: '1',
        author: {
          name: 'Thành Nguyễn',
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDIGg7ZETg-aIbxhMJb9Wxz-7n0QF6fQObuav5sy99E3uD00lA8SEzeTPXm8LpZR6EmLwXP-hrAdyJNnzs6BUjg5-baHpAn_7E5RaemrsC4tOO538v56sv0RDynrQhwbvMTzHTaeEH_C5hu7YLdEnkOgkM5Coq-mUpXRZchNTKg2EUU8eUpzOx5bRvEtAPww2HEF5NvDzU3YJ_xorfeHiYmolLFdtKGSgNSOaQnDnH4FbmGSQPsWYpjlJ32fo_LE9F-G74jvzrhAgg',
        },
        content: 'Chúc bạn thành công! Hãy bắt đầu từ những bước nhỏ nhé.',
        createdAt: '1 giờ trước',
      },
    ],
  },
];
