
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


# 📸 API Output Screenshots

## 👤 User Router

### User Registration

<img width="700" alt="image" src="https://github.com/user-attachments/assets/3091699f-b869-4cee-8983-2aab200d1fb1" />


### User Login

<img width="700"  alt="image" src="https://github.com/user-attachments/assets/e907be89-fab1-472a-a686-cf431f4aeade" />


### Auth Login

<img width="700" alt="image" src="https://github.com/user-attachments/assets/f67160dd-0943-43fe-a9d2-52a7078b5c1e" />


### Update User

<img width="700" alt="image" src="https://github.com/user-attachments/assets/63f95a28-c053-4af8-ae7b-1253b8b95098" />


### Delete User

<img width="700" alt="image" src="https://github.com/user-attachments/assets/c4a85644-db95-4443-ba8e-4eebbf3494f6" />


### Logout User

<img width="700"  alt="image" src="https://github.com/user-attachments/assets/d4a9a7db-0e15-43fe-873f-da996e9fd893" />


### Logout From All Devices

<img width="700" alt="image" src="https://github.com/user-attachments/assets/7f44322b-65ce-4885-826d-787cb03dfdd0" />


### Get All Users

<img width="700" alt="image" src="https://github.com/user-attachments/assets/30606c35-4952-499e-8c47-8bf2e2359d40" />


---

## 👨‍💼 Admin Router

### Admin Update User

<img width="700"  alt="image" src="https://github.com/user-attachments/assets/4c9a6de0-2954-4a75-bf96-03ec5bf7f800" />


### Admin Delete User

<img width="700" alt="image" src="https://github.com/user-attachments/assets/32d67c42-1b56-4a24-a650-e5071d8cd0b0" />


---

## 📝 Blog Router

### Add Blog

<img width="700" alt="image" src="https://github.com/user-attachments/assets/f255327f-0709-41b9-8cad-fd6cf84c0a64" />


### Update Blog

<img width="700" alt="image" src="https://github.com/user-attachments/assets/addaf105-5633-44f7-9d01-7f3051fb6a96" />


### Delete Blog

<img width="700" alt="image" src="https://github.com/user-attachments/assets/dd6712a7-8cc6-4a4f-ba92-c8fb62a75008" />


### Get All Blogs
<img width="700" alt="image" src="https://github.com/user-attachments/assets/28849c4f-ef87-4d09-917d-ec2e58fa2f4e" />



---

# 👨‍💻 Author

**Ankit Shiyal**


---

