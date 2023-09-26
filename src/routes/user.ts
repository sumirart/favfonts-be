import { Router } from "express";
import { body } from "express-validator";

import { registerController, loginController } from "../controllers/user";

const router = Router();
const registerValidationRules = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
  body("name").notEmpty().withMessage("Name is required"),
];

const loginValidationRules = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

router.post("/register", registerValidationRules, registerController);
router.post("/login", loginValidationRules, loginController);

export default router;
