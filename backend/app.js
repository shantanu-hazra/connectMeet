import express, { urlencoded } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import { createServer } from "node:http";
import { Server } from "node:http";

import cors from "cors";
import { Socket } from "socket.io";

import { connectToServer } from "./src/controllers/socketManager.js";
import userRoutes from "./src/routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToServer(server);

app.set("port", process.env.port || 8080);
app.use(cors({ origin: process.env.REACT_FRONTEND, credentials: true }));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// user routes
app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectDB = await mongoose.connect(`${process.env.MONGO_COMPASS_URI}`);
  console.log(`Connected to MONGO at: ${connectDB.connection.host}`);
  server.listen(8080, (req, res) => {
    console.log(`Listning to port 8080`);
  });
};

start();
