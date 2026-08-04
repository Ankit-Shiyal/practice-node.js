
import express from "express";

import EmployeeController from "../controller/EmployeeController.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js"

const router=express.Router()

router.post("/addEmployee", EmployeeController.add)
router.post("/Login",EmployeeController.login)
router.post("/AuthLogin",auth, EmployeeController.authLogin)

router.get("/logout",auth, EmployeeController.logout)
router.get("/logoutAll", auth, EmployeeController.logoutAll)

router.get("/allEmployee", auth, checkRole("admin"), EmployeeController.getAllEmployee)
router.get("/allEmployeeRender",  EmployeeController.getAllEmployee) //render use
router.delete("/DeleteEmployee", auth, EmployeeController.deleteEmployee)
router.patch("/UpdateEmployee",auth,EmployeeController.updateEmployee)

export default router
