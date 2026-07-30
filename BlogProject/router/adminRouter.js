import express from "express";

import UserController from "../controller/UserController.js";
import { registerSchema, updateUserSchema } from "../validation/UserSchema.js";
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.delete(
  "/delete/:id",
  auth,
  checkRole("admin"),
  UserController.deleteUser,
);

router.patch(
  "/update/:id",
  auth,
  checkRole("admin"),
  upload.single("Profile_Pic"),
  UserController.updateUser,
);

export default router;
