import express, { Application } from "express";
import { connectDB } from "./Utils/connectDB";
import { mainApp } from "./mainApp";
import env from "dotenv";
env.config();

const port: number = parseInt(process.env.PORT!);
const app: Application = express();

mainApp(app);

const server = app.listen(process.env.PORT! || port, () => {
  console.log("server is on now");
  connectDB();
});

process.on("uncaughtException", (error: any) => {
  console.log("server is shutting down due to uncaughtException: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down due to unHandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
