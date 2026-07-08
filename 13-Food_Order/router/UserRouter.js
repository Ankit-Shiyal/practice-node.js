
 // external module
import express from "express"

// local modules
import UserController from "../controller/UserController.js"

// router
const router = express.Router()

router.post("/add", UserController.add)
router.get("/allUser", UserController.getAllUser)
router.post("/userLogin", UserController.login)
router.post("/authLogin", UserController.authLogin)

export default router;