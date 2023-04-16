import { Request, Response, Router } from "express";
import { handleErrorsMiddleware } from "@/middlewares";

import authRouters from "./authRouters";
import { tokenValidation } from "@/middlewares/tokenValidation";

const router = Router();

router
.get("/health", (req: Request, res: Response) => res.send("Ok"))
.use("/auth", authRouters)
.use(handleErrorsMiddleware);

export default router;
