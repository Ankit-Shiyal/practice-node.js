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
      BlogImg: req.file.path,
      Cloudinary_Id: req.file.filename,
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

const updateBlog = async (req, res, next) => {
  try {
    const blog = await BlogModel.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog not found", 404));
    }

    const updates = Object.keys(req.body);

    const allowedFields = ["BlogTitle", "Content", "Category"];

    const isValidUpdate = updates.every((field) =>
      allowedFields.includes(field),
    );

    if (!isValidUpdate) {
      return next(new HttpError("Only allowed fields can be updated", 400));
    }

    if (req.file) {
      if (blog.Cloudinary_Id) {
        await cloudinary.uploader.destroy(blog.Cloudinary_Id);
      }

      blog.BlogImg = req.file.path;
      blog.Cloudinary_Id = req.file.filename;
    }

    updates.forEach((field) => {
      blog[field] = req.body[field];
    });

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find().populate("Author", "Name Email -_id");

    res.status(200).json({
      success: true,
      message: "All blogs fetched successfully",
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { BlogAdd, deleteBlog, updateBlog, getAllBlogs };
