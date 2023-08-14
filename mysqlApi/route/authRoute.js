import { check } from "express-validator";
import { signUp } from "../controller/auth/registration.js";
import express from "express";

const router = express.Router();
router.post(
  "/sign-up",
  [
    check("email")
      .notEmpty()
      .withMessage("Field cannot be blank")
      .isEmail()
      .withMessage("Invalid Eamil"),
    check("name").notEmpty().withMessage("name is required"),
    check("image").notEmpty().withMessage("Please Select image"),
    check("level").notEmpty().withMessage("level is required"),
    check("phone").notEmpty().withMessage("Field cannot be blank"),
    check("password")
      .notEmpty()
      .withMessage("Field cannot be blank")
      .isLength({ min: 4 })
      .withMessage("Password must be more than 8 characters"),
    check("confirmPassword")
      .notEmpty()
      .withMessage("Field cannot be blank")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("The password does not match");
        }
        return true;
      }),
  ],
  signUp
);

router.post("add-property", [
  check("name").notEmpty().withMessage("name is required"),
  check("image").notEmpty().withMessage("Please Select image"),
  check("level").notEmpty().withMessage("level is required"),
  check("phone").notEmpty().withMessage("Field cannot be blank"),
]);

export default router;
