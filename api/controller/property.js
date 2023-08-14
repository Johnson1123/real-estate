import Property from "../model/property.js";
import asyncHandler from "express-async-handler";

export const addProperty = asyncHandler(async (req, res) => {
  const { title, address, price, discount, image, location, note, type } =
    req.body;

  await Property.create({
    title,
    address,
    price,
    discount,
    image,
    location,
    note,
    type,
  });

  res.status(201).json({
    success: true,
    message: "Property Submitted Successfully",
  });
});
