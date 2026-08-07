import providerModel from "../model/ProviderModel.js";
import HttpError from "../middleware/HttpError.js";
import modelUser from "../model/UserModel.js";

const addProvider = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const user = await modelUser.findById(userId);

    if (!user) {
      return next(new HttpError("user not found", 404));
    }

    const existingProvider = await providerModel.findById(userId);

    if (existingProvider) {
      return next(
        new HttpError("already provider registered with this id", 500),
      );
    }
    const { restaurantName, bankNumber } = req.body;


    const newProvider = new providerModel({
      providerName: req.user._id,
      restaurantName,
      bankNumber,
      document: req.files.map((file) => file.path),
      Cloudinary_Id: req.files.map((file) => file.filename),
    });

    modelUser.Role = "provider";
    await newProvider.save();

    const provider = await providerModel
      .findById(newProvider._id)
      .populate("providerName", "Name Email")
      .populate("restaurantName", "RestaurantName Address Phone city state");

    res.status(201).json({
      success: true,
      message: "New provider added",
      provider,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { addProvider };
