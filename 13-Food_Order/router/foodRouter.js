import express from "express";

import foodController from "../controller/foodController.js";
import { foodImage } from "../middleware/upload.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
import validate from "../middleware/validate.js";
import { addFoodSchema, updateFoodSchema } from "../validation/foodSchema.js";

const router = express.Router();

router.post(
  "/addFood",
  auth,
  checkRole("admin", "provider"),
  foodImage.array("food_pic", 5),
  validate(addFoodSchema),
  foodController.addFood,
);

router.get("/allFood", auth, foodController.getAllFood);

router.patch(
  "/update/:id",
  auth,
  checkRole("admin", "provider"),
  foodImage.array("food_pic", 5),
  validate(updateFoodSchema),
  foodController.updateFood,
);

router.delete(
  "/delete/:id",
  auth,
  checkRole("admin", "provider"),
  foodController.deleteFood,
);

export default router;
