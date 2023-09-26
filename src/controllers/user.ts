import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

import { User } from "../models/user";

let users: User[] = [];
const prisma = new PrismaClient();

export const registerController = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { username, password, name } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = await prisma.user.create({
    data: {
      username,
      name,
      password: hashedPassword,
    },
  });

  res.status(201).json({ id: user.id, username, name });
};

export const loginController = (req: Request, res: Response) => {
  // call controller
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  const user: User = {
    username: req.body.username,
    password: req.body.password,
  };

  users.push(user);
  res.status(201).json(user);
};
