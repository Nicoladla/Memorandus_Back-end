import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

export default function connectApp() {
  return app.listen(port, () => console.log(`App running on port: ${port}`));
}
