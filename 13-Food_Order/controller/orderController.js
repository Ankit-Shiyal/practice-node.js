import orderModel from "../model/OrderModel.js";
import HttpError from "../middleware/HttpError.js";

const addOrder = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const { restaurant, items, deliveryAddress, phone } = req.body;


    const newOrder = new orderModel({
      user: userId,
      restaurant,
      items,
      totalAmount,
      deliveryAddress,
      phone,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default {
  addOrder,
};
