const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router
	.get("/people", PersonController.listPeople)
	.get("/people/:id", PersonController.readPerson)
	.post("/people", PersonController.createPerson)
	.put("/people/:id", PersonController.updatePerson)
	.delete("/people/:id", PersonController.deletePerson)
	.get("/people/:studentId/enrollments/:enrollmentId", PersonController.readEnrollment)
	.post("/people/:studentId/enrollments/", PersonController.createEnrollment)
	.put("/people/:studentId/enrollments/:enrollmentId", PersonController.updateEnrollment)
	.delete("/people/:studentId/enrollments/:enrollmentId", PersonController.deleteEnrollment)

module.exports = router;
