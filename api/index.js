import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("몽고db와 연결 성공");
  })

  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("3000에서 서버가 정상 작동중입니다.");
});

app.use("/api/user", userRoutes);
