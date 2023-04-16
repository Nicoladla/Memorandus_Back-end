import { SignIn, SignUp } from "@/protocols";
import joi from "joi";

export const signUpSchema = joi.object<SignUp>({
  image: joi.string().uri(),
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
  confirmPassword: joi.ref("password"),
});

export const signInSchema = joi.object<SignIn>({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
});