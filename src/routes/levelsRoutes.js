const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();

router
	.get("/levels", LevelController.getAllLevels)
	.get("/levels/:id", LevelController.getLevelByPk)
	.post("/levels", LevelController.createLevel)
	.put("/levels/:id", LevelController.updateLevel)
	.delete("/levels/:id", LevelController.deleteLevel);

module.exports = router;
