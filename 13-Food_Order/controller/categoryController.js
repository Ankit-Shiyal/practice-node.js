import categoryModel from "../model/categoryModel.js";
import HttpError from "../middleware/HttpError.js";

const addCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const newCategory = await categoryModel({
      name,
      description,
      categoryImage: req.file?.path,
      Cloudinary_Id: req.file?.filename,
    });

    await newCategory.save();

    res.status(201).json({
      success: true,
      message: "New category added successfully",
      newCategory,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { addCategory };
