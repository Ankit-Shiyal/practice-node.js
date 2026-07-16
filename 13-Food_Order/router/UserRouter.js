
 // external module
import express from "express"

// local modules
import UserController from "../controller/UserController.js"
import userSchema from "../validation/UserSchema.js" 
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
// router
const router = express.Router()

router.post("/add", validate(userSchema),UserController.add)
router.post("/userLogin", UserController.login)
router.post("/authLogin",auth, UserController.authLogin)
router.delete("/delete", auth, UserController.deleteUser)
router.patch("/update", auth, UserController.updateUser)
router.get("/logoutUser", auth, UserController.logout)
router.get("/allLogout", auth, UserController.logoutAll)
router.get("/allUser",auth, checkRole("admin"),UserController.getAllUser)


export default router;