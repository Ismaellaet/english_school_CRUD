const db = require("../app/models");

class PersonController {
	static async listActivePeople(req, res) {
		try {
			const people = await db.Person.findAll();
			return res.json(people);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async listAllPeople(req, res) {
		try {
			const people = await db.Person.scopes("all").findAll();
			return res.json(people);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async readPerson(req, res) {
		const { id } = req.params;

		try {
			const person = await db.Person.findByPk(id);

			if (!person) {
				return res.json({ message: `Person ${id} not found!` });
			}

			return res.json(person);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async createPerson(req, res) {
		try {
			const person = await db.Person.create(req.body);
			return res.status(201).json(person);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async updatePerson(req, res) {
		const { id } = req.params;
		const newInfos = req.body;

		try {
			await db.Person.update(newInfos, { where: { id } });
			const person = await db.Person.findByPk(id);

			if (!person) {
				return res.json({ message: `Person ${id} not found!` });
			}

			return res.json(person);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async deletePerson(req, res) {
		const { id } = req.params;
		try {
			await db.Person.destroy({ where: { id } });
			return res.json({ message: `Person ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async restorePerson(req, res) {
		const { id } = req.params;
		try {
			await db.Person.restore({
				where: { id },
			});
			return res.json({ message: `Person ${id} successfully restored!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async readEnrollment(req, res) {
		const { studentId, enrollmentId } = req.params;

		try {
			const enrollment = await db.Enrollment.findOne({
				where: {
					id: enrollmentId,
					student_id: studentId,
				},
			});

			if (!enrollment) {
				return res.json({ message: `Enrollment ${enrollmentId} not found!` });
			}

			return res.json(enrollment);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async createEnrollment(req, res) {
		const { studentId } = req.params;
		try {
			const enrollment = await db.Enrollment.create({
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
		const newInfos = { ...req.body };

		try {
			await db.Enrollment.update(newInfos, {
				where: {
					id: enrollmentId,
					student_id: studentId,
				},
			});
			const enrollment = await db.Enrollment.findOne({
				where: {
					id: enrollmentId,
					student_id: studentId,
				},
			});

			if (!enrollment) {
				return res.json({ message: `Enrollment ${enrollmentId} not found!` });
			}

			return res.json(enrollment);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async deleteEnrollment(req, res) {
		const { studentId, enrollmentId } = req.params;
		try {
			await db.Enrollment.destroy({
				where: {
					id: enrollmentId,
					student_id: studentId,
				},
			});
			return res.json({ message: `Enrollment ${enrollmentId} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = PersonController;
