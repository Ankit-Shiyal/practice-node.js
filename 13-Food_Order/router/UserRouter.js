
 // external module
import express from "express"

// local modules
import UserController from "../controller/UserController.js"
import userSchema from "../validation/UserSchema.js" 
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
// router
const router = express.Router()

router.post("/add", validate(userSchema),UserController.add)
router.get("/allUser",auth, UserController.getAllUser)
router.post("/userLogin", UserController.login)
router.post("/authLogin",auth, UserController.authLogin)
router.delete("/delete", auth, UserController.deleteUser)



export default router;