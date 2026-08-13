import Joi from "joi";

export const providerSchema = Joi.object({
  restaurantName: Joi.string().max(25).messages({
    "string.max": "Restaurant Name must not exceed 25 characters",
  }),

  bankNumber: Joi.string()
    .pattern(/^\d{9,18}$/)
    .messages({
      "string.pattern.base": "Bank Number must contain 9 to 18 digits only",
    }),

  document: Joi.any().optional(),
})
  .or("restaurantName", "bankNumber", "document")
  .messages({
    "object.missing":
      "At least one of restaurantName, bankNumber or document is required",
  });

export const updateProviderSchema = providerSchema
  .fork(["restaurantName", "bankNumber"], (field) => field.optional())
  .or("restaurantName", "bankNumber", "document")
  .messages({
    "object.missing":
      "At least one of restaurantName, bankNumber or document is required",
  });
