# API Usage Guide - Blog Cá Nhân Backend

## 🚀 Quick Start

### 1. Cài đặt dependencies

```bash
yarn install
# hoặc
npm install
```

### 2. Cấu hình môi trường

Tạo file `.env` từ `.env.example`:

```bash
cp .env.example .env
```

Cập nhật các biến môi trường trong `.env`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blogcanhanbe
JWT_SECRET=your-super-secret-key-change-this
JWT_EXPIRES_IN=7d
```

### 3. Khởi động MongoDB

Đảm bảo MongoDB đang chạy trên máy của bạn:

```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### 4. Chạy server

```bash
# Development mode
yarn dev

# Production mode
yarn start
```

Server sẽ chạy tại: `http://localhost:3000`

## 📚 API Documentation

Truy cập Swagger UI để xem đầy đủ API documentation:

```
http://localhost:3000/api-docs
```

## 🔑 Authentication

### Đăng ký Admin đầu tiên

```bash
POST http://localhost:3000/api/v1/auth/register
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "123456",
  "name": "Admin"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "...",
      "email": "admin@example.com",
      "name": "Admin",
      "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Login

```bash
POST http://localhost:3000/api/v1/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "123456"
}
```

### Sử dụng Token

Với các endpoint yêu cầu authentication, thêm token vào header:

```
Authorization: Bearer <your-token-here>
```

## 📝 API Endpoints Overview

### Public Endpoints (Không cần authentication)

#### Posts

- `GET /api/v1/posts` - Lấy danh sách bài viết (với pagination, filter, search)
- `GET /api/v1/posts/:slug` - Lấy bài viết theo slug
- `GET /api/v1/posts/:id/related` - Lấy bài viết liên quan (by ID)
- `GET /api/v1/posts/:slug/related` - Lấy bài viết liên quan (by slug) ✨ **NEW**
- `GET /api/v1/posts/popular` - Lấy bài viết phổ biến nhất ✨ **NEW**
- `GET /api/v1/posts/search/suggestions` - Autocomplete search ✨ **NEW**
- `POST /api/v1/posts/:slug/view` - Tăng view count ✨ **NEW**

#### Categories

- `GET /api/v1/categories` - Lấy danh sách categories

#### Comments

- `GET /api/v1/posts/:postId/comments` - Lấy comments của bài viết
- `POST /api/v1/posts/:postId/comments` - Tạo comment mới

#### Newsletter

- `POST /api/v1/newsletter/subscribe` - Đăng ký nhận tin
- `POST /api/v1/newsletter/unsubscribe` - Hủy đăng ký

#### Author

- `GET /api/v1/author` - Lấy thông tin tác giả

#### Contact

- `POST /api/v1/contact` - Gửi tin nhắn liên hệ

### Protected Endpoints (Cần authentication - Admin only)

#### Posts

- `POST /api/v1/posts` - Tạo bài viết mới
- `PUT /api/v1/posts/:id` - Cập nhật bài viết
- `DELETE /api/v1/posts/:id` - Xóa bài viết

#### Categories

- `POST /api/v1/categories` - Tạo category mới
- `PUT /api/v1/categories/:id` - Cập nhật category
- `DELETE /api/v1/categories/:id` - Xóa category

#### Comments

- `GET /api/v1/comments/latest` - Lấy comments mới nhất ✨ **NEW**
- `DELETE /api/v1/comments/:id` - Xóa comment

#### Newsletter

- `GET /api/v1/newsletter/subscribers` - Lấy danh sách subscribers

#### Author

- `PUT /api/v1/author` - Cập nhật thông tin tác giả

#### Contact

- `GET /api/v1/contact/messages` - Lấy danh sách tin nhắn
- `PATCH /api/v1/contact/messages/:id/read` - Đánh dấu đã đọc

#### Upload

- `POST /api/v1/upload/image` - Upload ảnh

## 💡 Usage Examples

### Tạo Category

```bash
POST http://localhost:3000/api/v1/categories
Authorization: Bearer <your-token>
Content-Type: application/json

{
  "name": "JavaScript",
  "description": "Bài viết về JavaScript"
}
```

### Tạo Post

**Lưu ý:** Excerpt phải có ít nhất 50 ký tự, tags tối đa 10 tags.

```bash
POST http://localhost:3000/api/v1/posts
Authorization: Bearer <your-token>
Content-Type: application/json

{
  "title": "Học JavaScript cơ bản cho người mới bắt đầu",
  "excerpt": "Hướng dẫn chi tiết về JavaScript dành cho người mới bắt đầu lập trình web",
  "content": "<p>Nội dung bài viết...</p>",
  "featuredImage": "http://localhost:3000/uploads/image.jpg",
  "categoryId": "category-id-here",
  "tags": ["javascript", "tutorial", "beginner"],
  "isFeatured": true
}
```

### Lấy danh sách Posts với filter

```bash
GET http://localhost:3000/api/v1/posts?page=1&limit=10&category=javascript&featured=true&search=react
```

Query parameters:

- `page` - Số trang (default: 1)
- `limit` - Số items mỗi trang (default: 10, max: 50)
- `category` - Slug của category để filter
- `featured` - `true` để lấy bài viết featured
- `search` - Tìm kiếm theo title, excerpt, tags

### Lấy bài viết liên quan (by slug)

```bash
GET http://localhost:3000/api/v1/posts/my-post-slug/related?limit=3
```

### Lấy bài viết phổ biến

```bash
GET http://localhost:3000/api/v1/posts/popular?limit=5
```

### Search Autocomplete

```bash
GET http://localhost:3000/api/v1/posts/search/suggestions?q=javascript&limit=5
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "title": "JavaScript Basics",
      "slug": "javascript-basics"
    },
    {
      "title": "Advanced JavaScript",
      "slug": "advanced-javascript"
    }
  ]
}
```

### Tăng view count

```bash
POST http://localhost:3000/api/v1/posts/my-post-slug/view
```

Response:

```json
{
  "success": true,
  "data": {
    "views": 123
  }
}
```

### Tạo Comment

**Lưu ý:** Nội dung comment phải có ít nhất 3 ký tự, tên phải có 2-50 ký tự.

```bash
POST http://localhost:3000/api/v1/posts/:postId/comments
Content-Type: application/json

{
  "author": {
    "name": "Nguyễn Văn A",
    "email": "user@example.com"
  },
  "content": "Bài viết rất hay!",
  "parentId": null
}
```

Avatar sẽ được tự động generate nếu không cung cấp.

### Lấy comments mới nhất (Admin)

```bash
GET http://localhost:3000/api/v1/comments/latest?limit=5
Authorization: Bearer <your-token>
```

### Upload Image

```bash
POST http://localhost:3000/api/v1/upload/image
Authorization: Bearer <your-token>
Content-Type: multipart/form-data

[File: image field with your image file]
```

Response:

```json
{
  "success": true,
  "data": {
    "url": "http://localhost:3000/uploads/1234567890-image.jpg",
    "filename": "1234567890-image.jpg",
    "originalName": "my-image.jpg",
    "size": 123456,
    "mimetype": "image/jpeg"
  }
}
```

**Lưu ý:** URL trả về là full URL, có thể dùng trực tiếp.

## 🔒 Rate Limiting

Các public endpoints có rate limiting để tránh spam:

- **Comments**: 20 requests / 15 phút
- **Newsletter**: 10 requests / 15 phút
- **Contact**: 5 requests / 15 phút
- **Search**: 30 requests / 1 phút ✨ **NEW**
- **Upload**: 5 uploads / 1 giờ ✨ **NEW**

Khi vượt quá giới hạn, bạn sẽ nhận được response:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Quá nhiều yêu cầu. Vui lòng thử lại sau."
  }
}
```

## ✅ Validation Rules

### Blog Post

- `title`: 10-200 ký tự
- `excerpt`: **50-300 ký tự** (updated)
- `content`: Tối thiểu 100 ký tự
- `tags`: Tối đa **10 tags**, mỗi tag tối đa **30 ký tự** (new)

### Comment

- `content`: **3-1000 ký tự** (updated)
- `author.name`: **2-50 ký tự** (updated)
- `author.email`: Phải hợp lệ

### Contact

- `name`: 2-100 ký tự
- `subject`: 5-200 ký tự
- `message`: 10-2000 ký tự

## ⚠️ Error Handling

Tất cả errors đều có format nhất quán:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mô tả lỗi"
  }
}
```

Common error codes:

- `VALIDATION_ERROR` - Dữ liệu không hợp lệ
- `AUTHENTICATION_ERROR` - Chưa đăng nhập hoặc token không hợp lệ
- `AUTHORIZATION_ERROR` - Không có quyền truy cập
- `NOT_FOUND` - Không tìm thấy resource
- `DUPLICATE_ERROR` - Dữ liệu đã tồn tại
- `RATE_LIMIT_EXCEEDED` - Vượt quá giới hạn request

### Validation Error Example

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dữ liệu không hợp lệ",
    "details": [
      {
        "field": "excerpt",
        "message": "Mô tả ngắn phải có từ 50 đến 300 ký tự"
      },
      {
        "field": "tags",
        "message": "Tối đa 10 tags"
      }
    ]
  }
}
```

## 🌐 CORS Configuration

Backend đã được cấu hình CORS cho:

- Development: `http://localhost:5173` (Vite default)
- Development: `http://localhost:3000`

Credentials: `enabled`
Methods: `GET, POST, PUT, DELETE, PATCH`
Headers: `Content-Type, Authorization`

## 📁 Project Structure

```
blogcanhanBE/
├── config/           # Database và constants
├── controllers/      # Business logic
├── middleware/       # Auth, validation, error handling
├── models/          # Mongoose schemas
├── routes/          # API routes
├── utils/           # Helper functions
├── uploads/         # Uploaded files
├── docs/            # Swagger documentation
├── .env             # Environment variables
├── .env.example     # Environment template
└── index.js         # Entry point
```

## 🛠️ Development Tips

1. **Auto-reload**: Server tự động reload khi code thay đổi (nodemon)
2. **Swagger UI**: Test API trực tiếp tại `/api-docs`
3. **Logs**: Xem console để debug errors
4. **MongoDB**: Sử dụng MongoDB Compass để xem database

## 🎯 Frontend Integration Tips

### 1. CORS

Frontend chạy tại `http://localhost:5173` sẽ không gặp CORS errors.

### 2. Image URLs

Upload response trả về full URL, frontend chỉ cần lưu trực tiếp:

```typescript
const { url } = response.data;
// url = "http://localhost:3000/uploads/xxx.jpg"
```

### 3. Related Posts

Sử dụng slug thay vì ID:

```typescript
const relatedPosts = await fetch(
  `http://localhost:3000/api/v1/posts/${slug}/related?limit=3`
);
```

### 4. View Tracking

Gọi khi user xem bài viết:

```typescript
await fetch(`http://localhost:3000/api/v1/posts/${slug}/view`, {
  method: 'POST',
});
```

### 5. Search Autocomplete

Debounce search input:

```typescript
const suggestions = await fetch(
  `http://localhost:3000/api/v1/posts/search/suggestions?q=${query}&limit=5`
);
```

## 📞 Support

Nếu gặp vấn đề, vui lòng tạo issue tại: https://github.com/aid-thanh-nt/blogcanhanBE/issues
