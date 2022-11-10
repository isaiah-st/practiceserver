const express = require("express");
const router = express.Router();

const controller = require("../controller/inventoryController");
router.get("/", controller.getAllInventory);
router.get("/:id", controller.getInventoryByID);

module.exports = router;