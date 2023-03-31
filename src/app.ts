import express from "express";
import "express-async-errors";
import cors from "cors";
import indexRouters from "./routers/indexRouters";
import connectApp from "./server";

export const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRouters);

connectApp();
