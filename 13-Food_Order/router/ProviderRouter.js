import express from "express";

import auth from "../middleware/auth.js";
import { document } from "../middleware/upload.js";
import ProviderController from "../controller/ProviderController.js";
import { providerSchema } from "../validation/ProviderSchema.js";
import validate from "../middleware/validate.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post(
  "/add",
  auth,
  document.array("document", 3),
  validate(providerSchema),
  ProviderController.addProvider,
);

router.patch(
  "/providerUpdate/:id",
  auth,
  checkRole("admin"),
  document.array("document", 3),
  ProviderController.updateProvider,
);

router.delete(
  "/providerDelete/:id",
  auth,
  checkRole("admin"),
  ProviderController.deleteProvider,
);

export default router;
