// upload

import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "Food",
//     allowed_formats: ["jpeg", "jpg", "png", "webp"],
//     transformation: [
//       {
//         height: 800,
//         width: 800,
//         crop: "limit",
//       },
//       {
//         fetch_format: "webp",
//       },
//     ],
//   },
// });

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//   },
// });

// export default upload;

const createUploads = ({
  folder,
  transformation = [],
  resource_type = "auto",
  fileSize = 1024 * 1024 * 5,
  allowed_formats = [],
  mimetype = [],
}) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
      return {
        folder,
        transformation,
        allowed_formats,
        resource_type,
      };
    },
  });

  return multer({
    storage,
    limits: { fileSize },
    fileFilter: (req, file, cb) => {
      if (mimetype.length && !mimetype.includes(file.mimetype)) {
        return cb(
          new Error(
            `invalid file type, Allowed types: ${mimetype.join(", ")} `,
          ),
          false,
        );
      } else {
        cb(null, true);
      }
    },
  });
};

export const profilePic = createUploads({
  folder: "13-food_order/Profile_Pic",
  transformation: [
    { height: "800", width: "800", crop: "limit" },
    { fetch_format: "webp" },
    { quality: "auto" },
  ],
  allowed_formats: ["jpeg", "jpg", "png", "webp"],
  mimetype: ["image/jpeg", "image/png", "image/jpg", "image/webp"],
});

export const RestaurantImage = createUploads({
  folder: "13-food_order/RestaurantImage",
  transformation: [
    { height: "800", width: "800", crop: "limit" },
    { fetch_format: "webp" },
    { quality: "auto" },
  ],
  allowed_formats: ["jpeg", "jpg", "png", "webp"],
  mimetype: ["image/jpeg", "image/png", "image/jpg", "image/webp"],
});

export const document = createUploads({
  folder: "13-food_order/document",
  resource_type: "raw",
  allowed_formats: ["pdf"],
  mimetype: ["application/pdf"],
});



export const categoryImage = createUploads({
  folder: "13-food_order/categoryImage",
  transformation: [
    { height: "800", width: "800", crop: "limit" },
    { fetch_format: "webp" },
    { quality: "auto" },
  ],
  allowed_formats: ["jpeg", "jpg", "png", "webp"],
  mimetype: ["image/jpeg", "image/png", "image/jpg", "image/webp"],
});