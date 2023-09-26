import { Router } from "express";
import { auth } from "../middleware/auth";
import { getFontsController } from "../controllers/fonts";

const router = Router();

router.get("/all", auth, getFontsController);

export default router;
