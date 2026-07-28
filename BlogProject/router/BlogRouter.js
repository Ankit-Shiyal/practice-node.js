import express from "express";

import BlogController from "../controller/BlogController.js";
import auth from "../middleware/auth.js"
import upload from "../middleware/upload.js";
import checkRole from "../middleware/checkRole.js"


const router = express.Router();

router.post("/add", auth, upload.single("BlogImg"), BlogController.BlogAdd);

router.delete("/delete/:id", auth, checkRole("user", "admin"),BlogController.deleteBlog)

export default router