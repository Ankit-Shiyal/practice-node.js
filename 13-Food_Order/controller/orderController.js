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
 
    let totalAmount = 0;

    const orderItems = items.map((item) => {
      const foodFound = foods.find(
        (food) => food._id.toString() === item.food.toString(),
      );
      const itemsTotal = foodFound.price * item.quantity;
      totalAmount += itemsTotal;
 
      return {
        food: foodFound._id,
        quantity: item.quantity,
      };
    });

    const order = await orderModel.create({
      customerName: userId,
      restaurant,
      items: orderItems,
      totalAmount,
      deliveryAddress,
      phone,
    });

    const orderPopulate = await order.populate([
      {
        path: "customerName",
        select: "Name Email Phone -_id",
      },
      {
        path: "restaurant",
        select: "RestaurantName Address Phone -_id",
      },
      {
        path: "items.food",
        select: "name price description -_id",
      },
    ]);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
      order: orderPopulate,
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const { id } = req.params;

    const order = await orderModel.findOneAndDelete({ _id: id });

    if (!order) {
      return next(new HttpError("Order not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

export default { addOrder, deleteOrder };
