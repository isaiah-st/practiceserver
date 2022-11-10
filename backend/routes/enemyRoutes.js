const express = require("express");
const router = express.Router();

const controller = require("../controller/enemyRoutes");
router.get("/", controller.getAllEnemies);
router.get("/:id", controller.getEnemyByID);

module.exports = router;