import express from "express";

import foodController from "../controller/foodController.js";
import { foodImage } from "../middleware/upload.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post(
  "/addFood",
  auth,
  checkRole("admin", "provider"),
  foodImage.array("food_pic", 5),
  foodController.addFood,
);

router.get("/allFood", auth, foodController.getAllFood);

router.patch(
  "/update/:id",
  auth,
  checkRole("admin", "provider"),
  foodImage.array("food_pic", 5),
  foodController.updateFood,
);

router.delete(
  "/delete/:id",
  auth,
  checkRole("admin", "provider"),
  foodController.deleteFood,
);

export default router;
