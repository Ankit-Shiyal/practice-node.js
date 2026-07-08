
// external module
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// mongoose schema
const userScheme = await mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      validate: (value) => {
        if (value.toLowerCase() === "password") {
          throw new Error("password can not set as a password");
        }
      },
    },
    Role: {
      type: String,
      enum: ["customer", "provider", "admin"],
      default: "customer",
    },
    Address: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// hash Password
userScheme.pre("save", async function () {
  const user = this;
  if (user.isModified("Password")) {
    user.Password = await bcrypt.hash(user.Password, 10);
  }
});

const modelUser = mongoose.model("user", userScheme);

export default modelUser;
