import express from "express";

import categoryController from "../controller/categoryController.js";
import { categoryImage } from "../middleware/upload.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
import validate from "../middleware/validate.js";
import {
  addCategorySchema,
  updateCategorySchema,
} from "../validation/categorySchema.js";

const router = express.Router();

router.post(
  "/addCategory",
  auth,
  validate(addCategorySchema),
  categoryImage.single("categoryImage"),
  checkRole("admin"),
  categoryController.addCategory,
);

router.get(
  "/allCategory",
  auth,
  checkRole("admin"),
  categoryController.getAllCategory,
);

router.delete(
  "/delete/:id",
  auth,
  checkRole("admin"),
  categoryController.deleteCategory,
);

router.patch(
  "/update/:id",
  auth,
  validate(updateCategorySchema),
  categoryImage.single("categoryImage"),
  checkRole("admin"),
  categoryController.updateCategory,
);

export default router;
