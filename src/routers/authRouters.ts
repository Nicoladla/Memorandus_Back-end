import { signIn, signUp } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signUpSchema } from "@/models";
import { Router } from "express";

const router = Router();

router.post("/sign-up", validateBody(signUpSchema), signUp);
router.post("/sign-in", signIn);

export default router;
