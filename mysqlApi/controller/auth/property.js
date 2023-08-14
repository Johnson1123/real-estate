import bcrypt from "bcrypt";
import User from "../../model/agent.js";
import { Result, validationResult } from "express-validator";
import { ValidationError } from "sequelize";
import Property from "../../model/property.js";

const addProperty= (req, res) => {
  const { name, price, discount, description, seller, sold, stock } = req.body;
  const error = validationResult(req);

  if (!error.isEmpty()) {
    req.flash("propertyError", error.array());
    let sendError = req.flash("propertyError");
    res.status(401).json({
      success: true,
      error: sendError,
    });
  }

  Property.create({
    name,
    price,
    discount,
    description,
    seller,
    sold,
    stock,
  });
};
