// local module
import modelUser from "../model/UserModel.js";
import HttpError from "../middleware/HttpError.js";

// add user
const add = async (req, res, next) => {
  try {
    const { Name, Email, Password, Role, Address, Phone, isVerified } =
      req.body;

    const newUser = await modelUser({
      Name,
      Email,
      Password,
      Role,
      Address,
      Phone,
      isVerified,
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "new User added", newUser });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// get all user
const getAllUser = async (req, res, next) => {
  try {
    const user = await modelUser.find({});

    if (user.length === 0) {
      return next(new HttpError("User data not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "All user data",
      Total: user.length,
      user,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// login user
const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;

    const user = await modelUser.findByCredential(Email, Password);

    if (!user) {
      return next(new HttpError("unable to login"));
    }

    const token = await user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "user logged in successfully",
      user,
      token,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// auth login
const authLogin = async (req, res, next) => {
  const user = req.user;

  res
    .status(200)
    .json({ success: true, message: "auth login successfully", user });
};


export default { add, getAllUser, login, authLogin };
