import express from "express";
import auth from "../middleware/auth.js";
import AttendanceController from "../controller/AttendanceController.js";

const router = express.Router();

router.post("/MarkAttendance", auth, AttendanceController.markAttendance);
router.get("/today", auth, AttendanceController.TodayAttendance);

export default router;
