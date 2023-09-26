import { Request, Response } from "express";
import { fetchFonts } from "../utils/api";
export const getFontsController = async (req: Request, res: Response) => {
  try {
    const result = await fetchFonts();
    res.status(200).json(result);
  } catch {
    res.status(500).json({ error: "something went wrong" });
  }
};
