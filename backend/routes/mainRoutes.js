const express = require("express");
const router = express.Router();

const enemyRoutes = require("./enemyRoutes");
const inventoryRoutes = require("./inventoryRoutes")

router.use("/enemy", enemyRoutes);
router.use("/inventory",inventoryRoutes);

module.exports = router;