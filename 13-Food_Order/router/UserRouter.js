
// // external module
import express from "express"

// // local modules
import UserController from "../controller/UserController.js"

// router
const router = express.Router()

router.post("/add", UserController.add)
router.get("/allUser", UserController.getAllUser)

export default router;