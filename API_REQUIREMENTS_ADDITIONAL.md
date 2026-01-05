# Yêu Cầu Bổ Sung API - Frontend Requirements

## ✅ Tổng Quan

Sau khi review file `API_USAGE_GUIDE.md`, team Frontend xác nhận rằng **hầu hết các API đã đầy đủ**. Tuy nhiên, có một số điểm cần làm rõ và bổ sung như sau:

---

## 1. ✨ Các API Đã Đầy Đủ

Các API sau đã được implement đầy đủ và đáp ứng yêu cầu:

- ✅ Blog Posts (CRUD, filter, search, related posts)
- ✅ Categories (CRUD)
- ✅ Comments (CRUD với replies)
- ✅ Newsletter (subscribe/unsubscribe)
- ✅ Author info
- ✅ Contact form
- ✅ Upload image
- ✅ Authentication (login/register)

---

## 2. 📝 Làm Rõ & Xác Nhận

### 2.1. Response Format cho GET `/api/v1/posts/:slug`

**Yêu cầu:** Xác nhận response trả về đầy đủ thông tin bài viết bao gồm:

```json
{
  "success": true,
  "data": {
    "id": "string",
    "slug": "string",
    "title": "string",
    "excerpt": "string",
    "content": "string (HTML - full content)",
    "featuredImage": "string (URL)",
    "category": {
      "id": "string",
      "name": "string",
      "slug": "string"
    },
    "author": {
      "id": "string",
      "name": "string",
      "avatar": "string (URL)",
      "bio": "string"
    },
    "publishedAt": "string (ISO 8601)",
    "readTime": "number",
    "tags": ["string"],
    "isFeatured": "boolean"
  }
}
```

**Lưu ý:** Field `content` phải là **full HTML content** của bài viết, không phải excerpt.

### 2.2. Category Filter

**Endpoint:** `GET /api/v1/posts?category=<slug>`

**Yêu cầu:** Xác nhận rằng:

- Parameter `category` nhận **slug** của category (VD: `tech`, `lifestyle`), không phải ID
- Khi `category=all` hoặc không có parameter category, trả về tất cả bài viết

### 2.3. Featured Posts Filter

**Endpoint:** `GET /api/v1/posts?featured=true`

**Yêu cầu:** Xác nhận parameter `featured` có thể nhận:

- `true` - chỉ lấy bài viết featured
- `false` hoặc không có - lấy tất cả

### 2.4. Related Posts

**Endpoint:** `GET /api/v1/posts/:id/related?limit=3`

**Câu hỏi:**

- Endpoint này nhận `:id` hay `:slug`?
- **Đề xuất:** Nên có cả 2 options:
  - `GET /api/v1/posts/:id/related` (by ID)
  - `GET /api/v1/posts/slug/:slug/related` (by slug)

Hoặc chỉ cần: `GET /api/v1/posts/:slug/related` (slug dễ sử dụng hơn từ frontend)

---

## 3. 🔧 Yêu Cầu Bổ Sung

### 3.1. Author Social Links

**Endpoint:** `GET /api/v1/author`

**Yêu cầu bổ sung:** Response cần bao gồm `socialLinks`:

```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "avatar": "string (URL)",
    "bio": "string",
    "socialLinks": {
      "github": "string (URL) - optional",
      "twitter": "string (URL) - optional",
      "linkedin": "string (URL) - optional",
      "facebook": "string (URL) - optional",
      "email": "string - optional"
    }
  }
}
```

**Lý do:** Frontend cần hiển thị các social links trên trang About và Footer.

### 3.2. Category Description

**Endpoint:** `POST /api/v1/categories`

**Request Body hiện tại:**

```json
{
  "name": "string",
  "description": "string" // ✅ Đã có
}
```

**Yêu cầu:** Xác nhận field `description` đã được implement và sẽ trả về trong:

- `GET /api/v1/categories`
- `GET /api/v1/posts` (trong nested category object)

### 3.3. Comment Avatar Default

**Endpoint:** `POST /api/v1/posts/:postId/comments`

**Yêu cầu:**

- Nếu user không cung cấp `avatar`, backend nên tự động generate avatar URL (có thể dùng Gravatar hoặc UI Avatars)
- Format đề xuất: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`

**Request Body:**

```json
{
  "author": {
    "name": "string",
    "email": "string",
    "avatar": "string (optional)" // Nếu không có, backend tự generate
  },
  "content": "string",
  "parentId": "string (optional)"
}
```

### 3.4. Newsletter Unsubscribe

**Endpoint:** `POST /api/v1/newsletter/unsubscribe`

**Yêu cầu làm rõ:**

- Endpoint này cần token trong URL hay chỉ cần email?
- **Đề xuất:** Nên có unsubscribe token để tránh spam:

```json
{
  "email": "string",
  "token": "string (unsubscribe token gửi qua email)"
}
```

Hoặc đơn giản hơn: `GET /api/v1/newsletter/unsubscribe/:token`

---

## 4. 🎯 Tính Năng Bổ Sung (Optional - Nice to Have)

### 4.1. View Count

**Đề xuất thêm endpoint:**

**POST** `/api/v1/posts/:slug/view`

- Tăng view count mỗi khi user xem bài viết
- Response trả về view count hiện tại

**Response:**

```json
{
  "success": true,
  "data": {
    "views": 123
  }
}
```

**Thêm field `views` vào BlogPost response:**

```json
{
  "id": "...",
  "title": "...",
  "views": 123,  // ← New field
  ...
}
```

### 4.2. Popular Posts

**Đề xuất thêm endpoint:**

**GET** `/api/v1/posts/popular?limit=5`

- Lấy các bài viết phổ biến nhất (theo views hoặc comments)
- Dùng để hiển thị sidebar "Bài viết phổ biến"

### 4.3. Latest Comments

**Đề xuất thêm endpoint:**

**GET** `/api/v1/comments/latest?limit=5`

- Lấy các comments mới nhất từ tất cả bài viết
- Dùng để hiển thị "Comments gần đây" trong admin dashboard

### 4.4. Search Suggestions

**Đề xuất thêm endpoint:**

**GET** `/api/v1/posts/search/suggestions?q=<query>&limit=5`

- Trả về gợi ý tìm kiếm (autocomplete)
- Chỉ trả về title và slug

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "title": "string",
      "slug": "string"
    }
  ]
}
```

---

## 5. 🔍 Validation Rules Cần Xác Nhận

### 5.1. Blog Post

- `title`: Tối thiểu 10 ký tự, tối đa 200 ký tự
- `excerpt`: Tối thiểu 50 ký tự, tối đa 300 ký tự
- `content`: Tối thiểu 100 ký tự
- `tags`: Tối đa 10 tags, mỗi tag tối đa 30 ký tự

### 5.2. Comment

- `content`: Tối thiểu 3 ký tự, tối đa 1000 ký tự
- `author.name`: Tối thiểu 2 ký tự, tối đa 50 ký tự

### 5.3. Contact

- `name`: Tối thiểu 2 ký tự, tối đa 100 ký tự
- `subject`: Tối thiểu 5 ký tự, tối đa 200 ký tự
- `message`: Tối thiểu 10 ký tự, tối đa 2000 ký tự

---

## 6. 🌐 CORS Configuration

**Yêu cầu:**

Frontend sẽ chạy tại:

- Development: `http://localhost:5173` (Vite default port)
- Production: `https://yourdomain.com` (sẽ cung cấp sau)

**Cần enable CORS cho:**

- Credentials: `true`
- Methods: `GET, POST, PUT, DELETE, PATCH`
- Headers: `Content-Type, Authorization`

---

## 7. 📊 Response Time Requirements

**Yêu cầu performance:**

- GET endpoints: < 200ms
- POST/PUT/DELETE endpoints: < 500ms
- Upload image: < 2s (cho file < 5MB)

**Pagination:**

- Default limit: 10 items
- Max limit: 50 items

---

## 8. 🔐 Security Requirements

### 8.1. Rate Limiting (Đã có ✅)

- Comments: 20 requests / 15 phút ✅
- Newsletter: 10 requests / 15 phút ✅
- Contact: 5 requests / 15 phút ✅

### 8.2. Bổ sung

- **Search**: 30 requests / 1 phút (tránh spam search)
- **Upload**: 5 uploads / 1 giờ (tránh spam upload)

### 8.3. Input Sanitization

- Tất cả user input phải được sanitize để tránh XSS
- HTML content trong blog post phải được validate (chỉ cho phép safe HTML tags)

---

## 9. 📸 Image Upload Requirements

**Endpoint:** `POST /api/v1/upload/image`

**Yêu cầu chi tiết:**

### Accepted Formats:

- JPEG/JPG
- PNG
- WebP
- GIF (optional)

### File Size:

- Max: 5MB
- Recommend: < 2MB

### Response Format:

```json
{
  "success": true,
  "data": {
    "url": "string (full URL: http://localhost:3000/uploads/xxx.jpg)",
    "filename": "string",
    "originalName": "string",
    "size": "number (bytes)",
    "mimetype": "string"
  }
}
```

**Lưu ý:**

- `url` phải là **full URL** (bao gồm domain), không phải relative path
- Frontend sẽ lưu URL này vào database

### Image Processing (Optional - Nice to Have):

- Auto resize nếu > 1920px width
- Auto optimize quality
- Generate thumbnail (300x300)

---

## 10. 📋 Checklist Tổng Hợp

### Cần Xác Nhận:

- [ ] GET `/posts/:slug` trả về full content (không phải excerpt)
- [ ] Category filter nhận slug (không phải ID)
- [ ] Related posts có thể query bằng slug
- [ ] Author response bao gồm socialLinks
- [ ] Category có field description
- [ ] Comment auto-generate avatar nếu không có
- [ ] Newsletter unsubscribe mechanism
- [ ] Image upload trả về full URL

### Optional (Nice to Have):

- [ ] View count tracking
- [ ] Popular posts endpoint
- [ ] Latest comments endpoint
- [ ] Search suggestions/autocomplete
- [ ] Image auto-resize và optimize

---

## 11. 🚀 Next Steps

1. **BE Team:** Review các yêu cầu bổ sung và xác nhận
2. **BE Team:** Implement các tính năng còn thiếu (nếu có)
3. **BE Team:** Update Swagger documentation
4. **FE Team:** Bắt đầu integrate API sau khi BE confirm
5. **Both Teams:** Testing và fix bugs

---

## 12. 📞 Contact

Nếu có thắc mắc về requirements, vui lòng liên hệ:

- Frontend Lead: [Your Name]
- Backend Lead: [BE Lead Name]

**Timeline:** Mong BE team có thể review và feedback trong vòng 2-3 ngày.

---

## Phụ Lục: Example Integration Code

### Frontend sẽ integrate như sau:

```typescript
// Example: Fetch blog post by slug
const fetchPost = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/v1/posts/${slug}`);
  const data = await response.json();
  return data.data; // BlogPost object
};

// Example: Create comment
const createComment = async (postId: string, commentData: CommentData) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/posts/${postId}/comments`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData),
    }
  );
  return response.json();
};
```

---

**Cảm ơn BE team! 🙏**
