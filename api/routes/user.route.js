import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test); // test는 컨트롤러.js에 있음

export default router;
