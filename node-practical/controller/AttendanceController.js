import modelAttendance from "../model/attendanceModel.js";
import HttpError from "../middleware/HttpError.js";

const markAttendance = async (req, res, next) => {
  try {
    const { employeeName, status } = req.body;

    const attendance = await modelAttendance({
      employeeName,
      status,
      markedBy: req.Employee.id,
    });
    await attendance.save();

    await attendance.populate("employeeName", "Name Email");
    await attendance.populate("markedBy", "Name Email");

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      attendance,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};
const TodayAttendance = async (req, res, next) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const attendance = await modelAttendance
      .find({
        date: {
          $gte: start,
          $lte: end,
        },
      })
      .populate("employeeName", "Name Email Phone Role")
      .populate("markedBy", "Name Email Phone Role");

    res.status(200).json({
      success: true,
      attendance,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { markAttendance, TodayAttendance };
