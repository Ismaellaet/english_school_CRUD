const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();

router
	.get("/levels", LevelController.list)
	.get("/levels/:id", LevelController.read)
	.post("/levels", LevelController.create)
	.put("/levels/:id", LevelController.update)
	.delete("/levels/:id", LevelController.delete);

module.exports = router;
