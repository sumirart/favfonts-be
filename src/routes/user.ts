import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { User } from "../models/user";

const router = Router();
let users: User[] = [];

const userValidationRules = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Add your CRUD API implementation here
router.post("/register", userValidationRules, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  // call controller

  const user: User = {
    id: "klsdfjklsdf",
    username: req.body.username,
    password: req.body.password,
  };

  users.push(user);
  res.status(201).json(user);
});

router.post("/login", (req: Request, res: Response) => {
  // call controller

  const user: User = {
    id: "klsdfjklsdf",
    username: req.body.username,
    password: req.body.password,
  };

  users.push(user);
  res.status(201).json(user);
});

export default router;
