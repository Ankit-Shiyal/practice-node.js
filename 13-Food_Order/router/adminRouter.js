// adminRouter

// external module
import express from "express";

// local modules
import UserController from "../controller/UserController.js";

import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
import {profilePic} from "../middleware/upload.js";

// router
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
  profilePic.single("Profile_Pic"),
  UserController.updateUser,
);

export default router;
