
# Employee Attendance Management System

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing employees and their attendance using JWT Authentication.

## 🚀 Features

- Employee Registration
- Employee Login (JWT Authentication)
- Protected Routes
- Role-based Authorization (Admin / Employee)
- Mark Employee Attendance
- Get Today's Attendance
- Password Hashing using bcryptjs
- MongoDB with Mongoose
- Error Handling Middleware

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## 📂 Project Structure

```
NODE-PRACTICAL/
│
├── config/
│   └── db.js
│
├── controller/
│   ├── AttendanceController.js
│   └── EmployeeController.js
│
├── middleware/
│   ├── auth.js
│   ├── checkRole.js
│   └── HttpError.js
│
├── model/
│   ├── attendanceModel.js
│   └── EmployeeModel.js
│
├── router/
│   ├── adminRouter.js
│   ├── attendanceRouter.js
│   └── EmployeeRouter.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```


## 📌 API Endpoints

### Employee

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /employee/add | Register Employee |
| POST | /employee/login | Login Employee |
| GET | /employee/auth | Authenticated Employee |

### Attendance

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /attendance/MarkAttendance | Mark Attendance |
| GET | /attendance/today | Get Today's Attendance |


## 👨‍💻 Author

**Ankit Shiyal**
