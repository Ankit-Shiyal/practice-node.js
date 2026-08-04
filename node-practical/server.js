import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";

import EmployeeRouter from "./router/EmployeeRouter.js";
import adminRouter from "./router/adminRouter.js";
import AttendanceRouter from "./router/attendanceRouter.js"

const app = express();

app.use(express.json());

app.use("/employee", EmployeeRouter);
app.use("/admin", adminRouter);
app.use("/Attendance", AttendanceRouter)

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use((req, res, next) => {
  return next(new HttpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error " });
});

const port = 5000;

async function serverStart() {
  try {
    const connect = await connectDB();

    if (!connect) {
      return console.log("failed to connect db");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

serverStart();
