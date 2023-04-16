import { signIn, signUp } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema, signUpSchema } from "@/models";
import { Router } from "express";

const router = Router();

router
  .post("/sign-up", validateBody(signUpSchema), signUp)
  .post("/sign-in", validateBody(signInSchema), signIn);

export default router;
