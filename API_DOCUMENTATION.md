# API Documentation - Blog Cá Nhân

Tài liệu này mô tả các API endpoints cần thiết cho backend của ứng dụng Blog Cá Nhân.

## Base URL

```
https://api.example.com/api/v1
```

## Authentication

Các endpoints công khai không yêu cầu authentication. Các endpoints quản trị (tạo, sửa, xóa) sẽ cần JWT token trong header:

```
Authorization: Bearer <token>
```

---

## 1. Blog Posts

### 1.1. Lấy danh sách bài viết

**GET** `/posts`

**Query Parameters:**

- `page` (number, optional): Số trang, mặc định = 1
- `limit` (number, optional): Số bài viết mỗi trang, mặc định = 10
- `category` (string, optional): Slug của category để lọc
- `featured` (boolean, optional): Lọc bài viết nổi bật
- `search` (string, optional): Tìm kiếm theo title, excerpt, tags

**Response:**

```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": "string",
        "slug": "string",
        "title": "string",
        "excerpt": "string",
        "content": "string (HTML)",
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
        "readTime": "number (minutes)",
        "tags": ["string"],
        "isFeatured": "boolean"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalPosts": 100,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### 1.2. Lấy bài viết theo slug

**GET** `/posts/:slug`

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "slug": "string",
    "title": "string",
    "excerpt": "string",
    "content": "string (HTML)",
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

### 1.3. Lấy bài viết liên quan

**GET** `/posts/:id/related`

**Query Parameters:**

- `limit` (number, optional): Số bài viết, mặc định = 3

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "slug": "string",
      "title": "string",
      "excerpt": "string",
      "featuredImage": "string (URL)",
      "category": {
        "id": "string",
        "name": "string",
        "slug": "string"
      },
      "author": {
        "id": "string",
        "name": "string",
        "avatar": "string (URL)"
      },
      "publishedAt": "string (ISO 8601)",
      "readTime": "number",
      "tags": ["string"]
    }
  ]
}
```

### 1.4. Tạo bài viết mới (Admin)

**POST** `/posts`

**Headers:**

```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "title": "string",
  "excerpt": "string",
  "content": "string (HTML)",
  "featuredImage": "string (URL)",
  "categoryId": "string",
  "tags": ["string"],
  "isFeatured": "boolean"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "slug": "string (auto-generated)",
    "title": "string",
    "publishedAt": "string (ISO 8601)"
  }
}
```

### 1.5. Cập nhật bài viết (Admin)

**PUT** `/posts/:id`

**Headers:**

```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:** (tương tự POST, các field optional)

### 1.6. Xóa bài viết (Admin)

**DELETE** `/posts/:id`

**Headers:**

```
Authorization: Bearer <token>
```

---

## 2. Categories

### 2.1. Lấy danh sách categories

**GET** `/categories`

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "slug": "string",
      "postCount": "number"
    }
  ]
}
```

### 2.2. Tạo category mới (Admin)

**POST** `/categories`

**Request Body:**

```json
{
  "name": "string",
  "slug": "string (optional, auto-generated from name)"
}
```

---

## 3. Comments

### 3.1. Lấy comments của bài viết

**GET** `/posts/:postId/comments`

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "postId": "string",
      "author": {
        "name": "string",
        "avatar": "string (URL)",
        "email": "string (optional)"
      },
      "content": "string",
      "createdAt": "string (ISO 8601)",
      "replies": [
        {
          "id": "string",
          "postId": "string",
          "author": {
            "name": "string",
            "avatar": "string (URL)"
          },
          "content": "string",
          "createdAt": "string (ISO 8601)"
        }
      ]
    }
  ]
}
```

### 3.2. Tạo comment mới

**POST** `/posts/:postId/comments`

**Request Body:**

```json
{
  "author": {
    "name": "string",
    "email": "string",
    "avatar": "string (URL, optional)"
  },
  "content": "string",
  "parentId": "string (optional, for replies)"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "content": "string",
    "createdAt": "string (ISO 8601)"
  }
}
```

### 3.3. Xóa comment (Admin)

**DELETE** `/comments/:id`

**Headers:**

```
Authorization: Bearer <token>
```

---

## 4. Newsletter

### 4.1. Đăng ký nhận tin

**POST** `/newsletter/subscribe`

**Request Body:**

```json
{
  "email": "string"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Đăng ký thành công!"
}
```

---

## 5. Author

### 5.1. Lấy thông tin tác giả

**GET** `/author`

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "avatar": "string (URL)",
    "bio": "string",
    "socialLinks": {
      "github": "string (URL)",
      "twitter": "string (URL)",
      "linkedin": "string (URL)",
      "facebook": "string (URL)"
    }
  }
}
```

---

## 6. Contact

### 6.1. Gửi tin nhắn liên hệ

**POST** `/contact`

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Tin nhắn đã được gửi thành công!"
}
```

---

## Error Responses

Tất cả các endpoints đều có thể trả về error response với format:

```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

**Common Error Codes:**

- `400` - Bad Request (dữ liệu không hợp lệ)
- `401` - Unauthorized (chưa đăng nhập)
- `403` - Forbidden (không có quyền)
- `404` - Not Found (không tìm thấy)
- `500` - Internal Server Error

---

## Notes

1. **Slug Generation**: Backend nên tự động tạo slug từ title (loại bỏ dấu tiếng Việt, thay khoảng trắng bằng dấu gạch ngang)

2. **Image Upload**: Cần thêm endpoint riêng để upload ảnh:

   - **POST** `/upload/image`
   - Trả về URL của ảnh đã upload

3. **Pagination**: Tất cả danh sách nên hỗ trợ pagination

4. **CORS**: Backend cần enable CORS cho frontend domain

5. **Rate Limiting**: Nên có rate limiting cho các endpoints công khai (đặc biệt là comments, contact, newsletter)

6. **Validation**:

   - Email phải hợp lệ
   - Content không được rỗng
   - Title tối thiểu 10 ký tự
   - Excerpt tối đa 200 ký tự

7. **SEO**: Có thể thêm các fields như `metaTitle`, `metaDescription`, `ogImage` cho bài viết
