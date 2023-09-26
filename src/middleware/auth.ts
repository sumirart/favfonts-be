import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({ error: "invalid or missing token" });
  }

  try {
    // check token
    const token = bearer.split(" ")[1];
    const payload = await verifyAccessToken(token);
    next();
  } catch {
    return res.status(401).json({ error: "invalid or missing token" });
  }
};
