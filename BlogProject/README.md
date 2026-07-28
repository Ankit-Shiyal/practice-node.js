
# 📝 Blog Management API

A secure and scalable **Blog Management REST API** built using **Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Cloudinary, Multer, and Joi Validation**. It provides complete user authentication, role-based authorization, image uploads, and blog management.

---

## 🚀 Features

### 👤 User Authentication
- User Registration
- User Login
- JWT Authentication
- Logout
- Logout From All Devices
- Protected Routes

### 👨‍💼 Role Based Authorization
- Admin Access
- User Access
- Middleware Based Role Checking

### 📝 Blog Management
- Create Blog
- Update Blog
- Delete Blog
- Get All Blogs
- Category Validation
- Blog Image Upload

### 📸 Image Upload
- Cloudinary Integration
- Multer Storage
- Automatic Image Optimization
- Delete Old Image During Update

### ✅ Validation
- Joi Validation
- Custom Error Messages
- Request Validation Middleware

### 🛡 Security
- Password Hashing using Bcrypt
- JWT Token Authentication
- Protected APIs
- Custom Error Handling

---

# 🛠 Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT
- Bcrypt.js

## Image Storage
- Cloudinary
- Multer
- Multer Storage Cloudinary

## Validation
- Joi

---

# 📂 Project Structure

```
BLOGPROJECT
│
├── config
│   ├── cloudinary.js
│   └── db.js
│
├── controller
│   ├── BlogController.js
│   └── UserController.js
│
├── middleware
│   ├── auth.js
│   ├── checkRole.js
│   ├── HttpError.js
│   ├── upload.js
│   └── validate.js
│
├── model
│   ├── BlogModel.js
│   └── UserModel.js
│
├── router
│   ├── UserRouter.js
│   ├── BlogRouter.js
│   └── adminRouter.js
│
├── validation
│   ├── BlogSchema.js
│   └── UserSchema.js
│
├── .env
├── package.json
└── server.js
```


---

# 📌 API Endpoints

## User

| Method | Endpoint |
|---------|----------|
| POST | /user/addUser |
| POST | /user/userLogin |
| POST | /user/authLogin |
| PATCH | /user/update |
| DELETE | /user/delete |
| GET | /user/logoutUser |
| GET | /user/allLogout |
| GET | /user/allUser |

---

## Admin

| Method | Endpoint |
|---------|----------|
| PATCH | /admin/update/:id |
| DELETE | /admin/delete/:id |

---

## Blog

| Method | Endpoint |
|---------|----------|
| POST | /blog/add |
| PATCH | /blog/update/:id |
| DELETE | /blog/delete/:id |
| GET | /blog/allBlog |

---

# 🔐 Authentication

Protected routes require JWT Token.

```
Authorization: Bearer YOUR_TOKEN
```

---

# 📷 Blog Categories

- Technology
- Sports
- Politics

---

# 📚 Packages Used

- express
- mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- joi
- multer
- cloudinary
- multer-storage-cloudinary

---

# 👨‍💻 Author

**Ankit Shiyal**

GitHub:
https://github.com/Ankit-Shiyal

---

