import modelUser from "../model/UserModel.js";
import HttpError from "../middleware/HttpError.js";
import RestaurantModel from "../model/RestaurantModel.js";
import providerModel from "../model/ProviderModel.js";
import foodModel from "../model/foodModel.js";

const getAllUsers = async (req, res, next) => {
  try {
    const { Role, isVerified } = req.query;

    const Query = {};

    if (Role === "provider") {
      Query.Role = Role;
    }

    if (Role === "customer") {
      Query.Role = Role;
    }

    if (isVerified != undefined) {
      Query.isVerified = isVerified === "true";
    }

    const users = await modelUser.find(Query);

    if (users.length === 0) {
      return next(new HttpError("user data not found", 404));
    }

    const totalUser = await modelUser.countDocuments(Query);

    res
      .status(200)
      .json({ success: true, message: "user data found", totalUser, users });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

const dashBoardStatics = async (req, res, next) => {
  try {
    // user
    const totalUsers = await modelUser.countDocuments();

    const totalCustomer = await modelUser.countDocuments({ Role: "customer" });

    const totalProvider = await modelUser.countDocuments({ Role: "provider" });

    const totalIsVerifiedProvider = await providerModel.countDocuments({
      isVerified: true,
    });

    const totalRejectedProvider = await providerModel.countDocuments({
      isVerified: false,
    });

    // Restaurant

    const totalRestaurant = await RestaurantModel.countDocuments();

    const totalVerifiedRestaurant = await RestaurantModel.countDocuments({
      isVerified: "true",
    });

    const totalRejectedRestaurant = await RestaurantModel.countDocuments({
      isVerified: "false",
    });

    // food

    const totalFood = await foodModel.countDocuments();

    res.status(200).json({
      success: true,
      message: "dashboard statics fetched successfully",
      totalUsers,
      totalCustomer,
      totalProvider,
      totalIsVerifiedProvider,
      totalRejectedProvider,
      totalRestaurant,
      totalVerifiedRestaurant,
      totalRejectedRestaurant,
      totalFood,
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

export default { getAllUsers, dashBoardStatics };
