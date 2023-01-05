const { PeopleServices } = require("../services");
const peopleServices = new PeopleServices();

class PersonController {
	static async getAllPeople(req, res) {
		try {
			const people = await peopleServices.read();
			return res.json(people);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async getActivePeople(req, res) {
		try {
			const people = await peopleServices.read({ active: true });
			return res.json(people);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async getPersonByPk(req, res) {
		const { id } = req.params;

		try {
			const person = await peopleServices.read({ id });

			if (!person?.length) {
				return res.json({ message: `Person ${id} not found!` });
			}

			return res.json(person);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async createPerson(req, res) {
		try {
			const person = await peopleServices.create(req.body);
			return res.status(201).json(person);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async updatePerson(req, res) {
		const { id } = req.params;

		try {
			await peopleServices.update(req.body, { id });
			return res.json({ message: `Person ${id} updated successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async deletePerson(req, res) {
		const { id } = req.params;

		try {
			await peopleServices.delete({ id });
			return res.json({ message: `Person ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async restorePerson(req, res) {
		const { id } = req.params;

		try {
			await peopleServices.restore(id);
			return res.json({ message: `Person ${id} successfully restored!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async cancelPersonAndTheirEnrollments(req, res) {
		const { studentId } = req.params;

		try {
			await peopleServices.cancelPersonAndTheirEnrollments(studentId);
			return res.json({
				message: `Person ${studentId} and their enrollments successfully canceled!`,
			});
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = PersonController;
