import compression from "compression";
import express from "express";
import morgan from "morgan";
import logger from "./lib/logger.js";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(helmet())
app.use(compression());
app.use(morgan("combined", {stream: {write: (message: string) => {logger.http(message.trim())}}}));

app.use("/", (req, res) => res.send("OK"));


export default app;