import RestaurantModel from "../model/RestaurantModel.js";
import HttpError from "../middleware/HttpError.js";
import cloudinary from "../config/cloudinary.js";

const add = async (req, res, next) => {
  try {
    const {
      RestaurantName,
      Address,
      Phone,
      description,
      state,
      city,
      openTime,
      closeTime,
      owner,
    } = req.body;

    const newRestaurant = await RestaurantModel({
      RestaurantName,
      Address,
      Phone,
      description,
      state,
      city,
      openTime,
      closeTime,
      owner: req.user._id,
      RestaurantImage: req.file?.path || null,
      Cloudinary_Id: req.file.filename || null,
    });

    await newRestaurant.save();

    res.status(201).json({
      success: true,
      message: "newRestaurant added successfully",
      newRestaurant,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const deleteRestaurant = async (req, res, next) => {
  try {
    const targetedUser = req.params.id;

    const Restaurant = await RestaurantModel.findById(targetedUser);

    if (req.file) {
      if (user.Cloudinary_Id) {
        await cloudinary.uploader.destroy(user.Cloudinary_Id);
      }
    }

    await Restaurant.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Restaurant data delete successfully" });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

export default { add, deleteRestaurant };
