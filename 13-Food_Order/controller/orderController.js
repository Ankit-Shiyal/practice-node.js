import orderModel from "../model/orderModel.js";
import foodModel from "../model/foodModel.js";
import HttpError from "../middleware/HttpError.js";

const addOrder = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const { restaurant, items, deliveryAddress, phone } = req.body;

    const foodIds = items.map((item) => item.food);

    const foods = await foodModel.find({
      _id: { $in: foodIds },
    });

    const order = await orderModel.create({
      customerName: userId,
      restaurant,
      items,
      totalAmount,
      deliveryAddress,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

export default { addOrder };