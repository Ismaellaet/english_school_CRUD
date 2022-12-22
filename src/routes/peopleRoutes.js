const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router
	.get("/people", PersonController.list)
	.get("/people/:id", PersonController.read)
	.post("/people", PersonController.create)
	.put("/people/:id", PersonController.update)
	.delete("/people/:id", PersonController.delete);

module.exports = router;
