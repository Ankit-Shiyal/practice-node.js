
# Employee Attendance Management System

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing employees and their attendance using JWT Authentication.

**render link**
link : https://practice-node-js-ng1o.onrender.com/

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



# 📸 API Screenshots

## Add Employee

<img width="1521" height="933" alt="Screenshot 2026-08-04 163503" src="https://github.com/user-attachments/assets/82038cc7-854c-4cb1-b251-087c1b835faf" />


---

## Login

<img width="1555" height="923" alt="Screenshot 2026-08-04 163514" src="https://github.com/user-attachments/assets/69f90335-168f-44af-89b9-710ba9aa755f" />


---

## Auth Login

<img width="1496" height="964" alt="Screenshot 2026-08-04 163547" src="https://github.com/user-attachments/assets/f2945600-c37f-4b37-9528-e22320841d41" />


---


## Update Employee
<img width="1492" height="899" alt="Screenshot 2026-08-04 164139" src="https://github.com/user-attachments/assets/fa033916-1630-488e-b8c4-5c699cc43b17" />


---

## Delete Employee

<img width="1489" height="716" alt="Screenshot 2026-08-04 164252" src="https://github.com/user-attachments/assets/5faeaf91-fbae-49f2-b619-571302846c19" />


---

## Mark Attendance

<img width="1521" height="889" alt="Screenshot 2026-08-05 101814" src="https://github.com/user-attachments/assets/5b38b932-ae6e-47cb-802d-fee3dee32f88" />


---

## Today's Attendance

<img width="1491" height="899" alt="Screenshot 2026-08-05 101824" src="https://github.com/user-attachments/assets/a51fe39d-7c55-41fe-ae96-85a1ed09d218" />



## 👨‍💻 Author

**Ankit Shiyal**
