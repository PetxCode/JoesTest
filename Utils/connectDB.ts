import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const connectDB = async () => {
  mongoose
    .connect(process.env.DB!)
    //   mongoose
    //     .connect(
    //       "mongodb+srv://josephine:josephine@cluster0.v1d2dga.mongodb.net/viteTest?retryWrites=true&w=majority"
    //     )
    .then(() => {
      console.log("DataBase connected: 🚀✌💌");
    })
    .catch((error: Error) => {
      console.log(error);
    });
};
