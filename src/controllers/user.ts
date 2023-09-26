import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

import { signAccessToken } from "../utils/jwt";

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

export const loginController = async (req: Request, res: Response) => {
  // call controller
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(401).json({
      error: "username or password is wrong",
    });
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    return res.status(401).json({
      error: "username or password is wrong",
    });
  }

  const accessToken = await signAccessToken({ username, name: user.name });

  res.status(200).json({
    username,
    name: user.name,
    token: accessToken,
  });
};
