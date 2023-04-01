import { SignUp } from "@/protocols";
import joi from "joi";

const signUpSchema = joi.object<SignUp>({
    image: joi.string().uri(),
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});
