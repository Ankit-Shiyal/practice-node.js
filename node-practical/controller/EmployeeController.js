import modelEmployee from "../model/EmployeeModel.js";
import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
  try {
    const { Name, Email, Password, Role, Address, Phone } = req.body;

    const newEmployee = await modelEmployee({
      Name,
      Email,
      Password,
      Role,
      Address,
      Phone,
    });

    await newEmployee.save();

    res
      .status(201)
      .json({ success: true, message: "new Employee added", newEmployee });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;

    const employee = await modelEmployee.findByCredential(Email, Password);

    if (!employee) {
      return next(new HttpError("Employee dana note found", 404));
    }

    const token = await employee.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "employee login successfully",
      employee,
      token,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const authLogin = async (req, res, next) => {
  try {
    const Employee = req.Employee;

    if (!Employee) {
      return next(new HttpError("Employee dana note found", 404));
    }

    res
      .status(200)
      .json({ success: true, message: "Auth login successfully", Employee });
  } catch (error) {}
};



const logout = async (req, res, next) => {
  try {
    const Employee = req.Employee;

    Employee.tokens = Employee.tokens.filter((t) => t.token != req.token);
    await Employee.save();

    res
      .status(200)
      .json({ success: true, message: "Employee logout successfully" });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

const logoutAll = async (req, res, next) => {
  try {
    req.Employee.tokens = [];

    await req.Employee.save();

    res.status(200).json({
      success: true,
      message: "Employee logout from all device successfully",
    });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

const getAllEmployee = async (req, res, next) => {
  try {
    const Employee = await modelEmployee.find({});

    if (Employee.length === 0) {
      return next(new HttpError("Employee data not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "All Employee data",
      Total: Employee.length,
      Employee,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


const deleteEmployee = async (req, res, next) => {
  try {
    const targetedUser = req.params.id || req.Employee._id;

    const Employee = await modelEmployee.findById(targetedUser);

  

    await Employee.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Employee data delete successfully" });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const targetedUser = req.params.id || req.Employee._id;

    const Employee = await modelEmployee.findById(targetedUser);

    const updates = Object.keys(req.body);

    let allowedFiled = ["Name", "Address", "Phone"];

    
    const isValidUpdate = updates.every((filed) => {
      return allowedFiled.includes(filed);
    });

    if (!isValidUpdate) {
      return next(new HttpError("only allowed filed can update", 404));
    }


    updates.forEach((update) => {
      Employee[update] = req.body[update];
    });

    await Employee.save();

    res.status(200).json({
      message: "Employee data updated successfully",
      Employee,
    });
  } catch (error) {
    next(new HttpError(error.message));
  }
};


export default {
  add,
  login,
  authLogin,
  logout,
  logoutAll,
  getAllEmployee,
  deleteEmployee,
  updateEmployee
};
