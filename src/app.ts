import express from "express";
import cors from "cors";
import indexRouters from "./routers";
import connectApp from "./server";

export const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRouters);

connectApp();
