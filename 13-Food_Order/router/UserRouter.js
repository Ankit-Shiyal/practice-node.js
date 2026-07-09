
 // external module
import express from "express"

// local modules
import UserController from "../controller/UserController.js"
import userSchema from "../validation/UserSchema.js" 
import validate from "../middleware/validate.js";
// router
const router = express.Router()

router.post("/add", validate(userSchema),UserController.add)
router.get("/allUser", UserController.getAllUser)
router.post("/userLogin", UserController.login)
router.post("/authLogin", UserController.authLogin)

export default router;