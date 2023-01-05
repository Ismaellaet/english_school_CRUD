const { Router } = require("express");
const PersonController = require("../controllers/PersonController");
const EnrollmentController = require("../controllers/EnrollmentController")

const router = Router();

router
	.get("/people", PersonController.getAllPeople)
	.get("/people/active", PersonController.getActivePeople)
	.get("/people/:id", PersonController.getPersonByPk)
	.post("/people", PersonController.createPerson)
	.put("/people/:id", PersonController.updatePerson)
	.delete("/people/:id", PersonController.deletePerson)
	.post("/people/:id/restore", PersonController.restorePerson)
	.post("/people/:studentId/cancel", PersonController.cancelPersonAndTheirEnrollments)
	.get("/people/:studentId/enrollments", EnrollmentController.getAllStudentEnrollments)
	.get("/people/:studentId/enrollments/:enrollmentId", EnrollmentController.getStudentEnrollment)
	.post("/people/:studentId/enrollments/", EnrollmentController.createEnrollment)
	.put("/people/:studentId/enrollments/:enrollmentId", EnrollmentController.updateEnrollment)
	.delete("/people/:studentId/enrollments/:enrollmentId", EnrollmentController.deleteEnrollment)

module.exports = router;
