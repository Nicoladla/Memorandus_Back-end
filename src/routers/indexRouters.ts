import { Request, Response, Router } from "express";
import { handleErrorsMiddleware } from "@/middlewares";

import relationshipGroupsRouters from "./relationshipGroupsRouters";
import authRouters from "./authRouters";

const router = Router();

router
  .get("/health", (req: Request, res: Response) => res.send("Ok"))
  .use("/auth", authRouters)
  .use("/", relationshipGroupsRouters)
  .use(handleErrorsMiddleware);

export default router;
