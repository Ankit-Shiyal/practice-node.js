
import express from "express";

import categoryController from "../controller/categoryController.js";
import{categoryImage}from "../middleware/upload.js"
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post("/addCategory", auth ,categoryImage.single("categoryImage"),checkRole("admin"),categoryController.addCategory )


export default router