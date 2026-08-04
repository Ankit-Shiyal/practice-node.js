import express from "express";

import EmployeeController from "../controller/EmployeeController.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.delete(
  "/DeleteEmployee/:id",
  auth,
  checkRole("admin"),
  EmployeeController.deleteEmployee,
);
router.patch(
  "/UpdateEmployee/:id",
  auth,
  checkRole("admin"),
  EmployeeController.updateEmployee,
);

export default router;
