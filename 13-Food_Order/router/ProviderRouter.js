import express from "express";

import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import ProviderController from "../controller/ProviderController.js";
import { updateProviderSchema } from "../validation/ProviderSchema.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.post(
  "/add",
  auth,
  upload.single("document"),
  validate(updateProviderSchema),
  ProviderController.addProvider,
);

export default router;
