const { EnrollmentsServices } = require("../services");
const enrollmentServices = new EnrollmentsServices();

class EnrollmentController {
	static async getAllStudentEnrollments(req, res) {
		const { studentId } = req.params;

		try {
			const enrollments = await enrollmentServices.read({
				student_id: studentId,
			});
			return res.json(enrollments);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async getStudentEnrollment(req, res) {
		const { studentId, enrollmentId } = req.params;

		try {
			const enrollment = await enrollmentServices.read({
				id: enrollmentId,
				student_id: studentId,
			});

			if (!enrollment?.length) {
				return res.json({
					message: `Enrollment ${enrollmentId} of student ${studentId} not found!`,
				});
			}

			return res.json(enrollment);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async createEnrollment(req, res) {
		const { studentId } = req.params;

		try {
			const enrollment = await enrollmentServices.create({
				...req.body,
				student_id: studentId,
			});
			return res.status(201).json(enrollment);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async updateEnrollment(req, res) {
		const { studentId, enrollmentId } = req.params;

		try {
			await enrollmentServices.update(req.body, { id: enrollmentId });
			return res.json({
				message: `Enrollment ${enrollmentId} of student ${studentId} updated successfully!`,
			});
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async deleteEnrollment(req, res) {
		const { studentId, enrollmentId } = req.params;

		try {
			await enrollmentServices.delete({
				id: enrollmentId,
				student_id: studentId,
			});
			return res.json({
				message: `Enrollment ${enrollmentId} of student ${studentId} deleted successfully!`,
			});
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = EnrollmentController;
