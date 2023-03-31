import { Request, Response, Router } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => res.send("Ok"));

export default router;
