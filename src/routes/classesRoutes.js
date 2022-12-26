const { Router } = require("express");
const ClassController = require("../controllers/ClassController");

const router = Router();

router
	.get("/classes", ClassController.list)
	.get("/classes/:id", ClassController.read)
	.post("/classes", ClassController.create)
	.put("/classes/:id", ClassController.update)
	.delete("/classes/:id", ClassController.delete);

module.exports = router;
