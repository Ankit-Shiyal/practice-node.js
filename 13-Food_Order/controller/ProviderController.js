import providerModel from "../model/ProviderModel.js";
import HttpError from "../middleware/HttpError.js";
import modelUser from "../model/UserModel.js";

import sendEmail from "../utils/sendEmail.js";
import { getWelcomeEmailTemplate } from "../template/emailTemplate.js";

const addProvider = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await modelUser.findById(userId);

    if (!user) {
      return next(new HttpError("user not found", 404));
    }
    const existingProvider = await providerModel.findOne({
      providerName: userId,
    });

    if (existingProvider) {
      return next(
        new HttpError("Already provider registered with this user", 400),
      );
    }

    const { restaurantName, bankNumber } = req.body;

    const newProvider = new providerModel({
      providerName: userId,
      restaurantName,
      bankNumber,
      document: req.files?.map((file) => file.path),
      Cloudinary_Id: req.files?.map((file) => file.filename),
    });

    await newProvider.save();

    user.Role = "provider";

    await user.save();

    await sendEmail({
      to: user.Email,
      subject: "Welcome to Eat&Joy - Provider Account 👨‍🍳",
      html: getWelcomeEmailTemplate(user.Name, "provider"),
    });

    const provider = await providerModel
      .findById(newProvider._id)
      .populate("providerName", "Name Email")
      .populate("restaurantName", "RestaurantName Address Phone city state");

    res.status(201).json({
      success: true,
      message: "New provider added and welcome email sent",
      provider,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


const updateProvider = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { restaurantName, bankNumber } = req.body;

    const provider = await providerModel.findById(id);

    if (!provider) {
      return next(new HttpError("Provider not found", 404));
    }

    if (restaurantName) {
      provider.restaurantName = restaurantName;
    }

    if (bankNumber) {
      provider.bankNumber = bankNumber;
    }

    if (req.files && req.files.length > 0) {
      provider.document = req.files.map((file) => file.path);
      provider.Cloudinary_Id = req.files.map((file) => file.filename);
    }

    await provider.save();

    const updatedProvider = await providerModel
      .findById(id)
      .populate("providerName", "Name Email");

    res.status(200).json({
      success: true,
      message: "Provider updated successfully",
      provider: updatedProvider,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const deleteProvider = async (req, res, next) => {
  try {
    const { id } = req.params;

    const provider = await providerModel.findById(id);

    if (!provider) {
      return next(new HttpError("Provider not found", 404));
    }

    await providerModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Provider deleted successfully",
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { addProvider, updateProvider, deleteProvider  };
