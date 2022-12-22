const db = require("../app/models");

class PersonController {
	static async list(req, res) {
		try {
			const people = await db.Person.findAll();
			return res.json(people);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async read(req, res) {
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

	static async create(req, res) {
		try {
			const person = await db.Person.create(req.body);
			return res.status(201).json(person);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async update(req, res) {
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

	static async delete(req, res) {
		const { id } = req.params;
		try {
			await db.Person.destroy({ where: { id } });
			return res.json({ message: `Person ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = PersonController;
