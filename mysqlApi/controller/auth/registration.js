import bcrypt from "bcrypt";
import User from "../../model/agent.js";
import { validationResult } from "express-validator";
import { ValidationError } from "sequelize";

export const signUp =
  ("/",
  (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      req.flash("validationError", error.array());
      return res.status(400).json({
        success: false,
        message: "Error occur",
        ...error,
      });
    }
    const {
      name,
      email,
      password,
      image,
      level,
      facebook,
      instagram,
      twitter,
      phone,
      linkedin,
    } = req.body;
    bcrypt.hash(password, 10).then((hashed) => {
      User.create({
        email: email,
        name: name,
        phone: phone,
        password: hashed,
        level: level,
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        image: image,
        linkedin: linkedin,
      });
    });
    res.send({
      success: true,
      data: req.body,
    });
  });
