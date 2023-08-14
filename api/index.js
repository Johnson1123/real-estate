import express from "express";
const port = 5000;
const app = express();
import connectDB from "./config/db.js";
import * as dotenv from "dotenv";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import agentRoutes from "./route/agent.js";
import propertyRoutes from "./route/property.js";
import bodyParser from "body-parser";

dotenv.config();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", agentRoutes);
app.use("/api", propertyRoutes);

connectDB();

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running ${port}`));
