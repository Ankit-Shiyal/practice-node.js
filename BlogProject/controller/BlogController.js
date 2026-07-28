import BlogModel from "../model/BlogModel.js";
import HttpError from "../middleware/HttpError.js";
import cloudinary from "../config/cloudinary.js";

const BlogAdd = async (req, res, next) => {
  try {
    const { BlogTitle, Content, Category } = req.body;

    const newBlog = await BlogModel({
      BlogTitle,
      Content,
      Category,
      BlogImg: req.file?.path || null,
      Cloudinary_Id: req.file.filename || null,
      Author: req.user._id,
    });

    await newBlog.save();

    res.status(201).json({ success: true, message: "new Blog added", newBlog });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


const deleteBlog = async (req, res, next) => {
  try {
    const targetedUser = req.params.id;

    const Blog = await BlogModel.findById(targetedUser);

    if (req.user.Cloudinary_Id) {
      await cloudinary.uploader.destroy(Blog.Cloudinary_Id);
    }

    await Blog.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Blog data delete successfully" });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

export default { BlogAdd, deleteBlog };
