import express from "express";
import inventoryRouter from "./Routers/inventory.router.js";

const router = express.Router();

//Inventory
router.use("/inventory", inventoryRouter);

//Products
// router.use("/products");

export default router;
