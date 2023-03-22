import express from "express";
import InventoryController from "../Controllers/inventory.controller.js";

const inventoryController = new InventoryController();

const router = express.Router();
//api/inventory
router.get("/:id?", inventoryController.getAllItems);
router.post("", inventoryController.addInventoryItem);
router.put("/:id", inventoryController.updateInventoryItem);
router.delete("/:id", inventoryController.deleteInventoryItem);
export default router;
