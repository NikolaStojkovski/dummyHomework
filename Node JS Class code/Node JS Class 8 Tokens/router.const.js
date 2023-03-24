import express from "express";
import authRouter from "./Routes/auth.router.js";
import productsRouter from "./Routes/products.routes.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/products", productsRouter);

export default router;
