const db = require("../app/models");

class ClassController {
	static async list(req, res) {
		try {
			const classes = await db.Class.findAll();
			return res.json(classes);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async read(req, res) {
		const { id } = req.params;

		try {
			const classFound = await db.Class.findByPk(id);

			if (!classFound) {
				return res.json({ message: `Class ${id} not found!` });
			}

			return res.json(classFound);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async create(req, res) {
		try {
			const classCreated = await db.Class.create(req.body);
			return res.status(201).json(classCreated);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async update(req, res) {
		const { id } = req.params;
		const newInfos = req.body;

		try {
			await db.Class.update(newInfos, { where: { id } });
			const classFound = await db.Class.findByPk(id);

			if (!classFound) {
				return res.json({ message: `Class ${id} not found!` });
			}

			return res.json(classFound);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async delete(req, res) {
		const { id } = req.params;
		try {
			await db.Class.destroy({ where: { id }});
			return res.json({ message: `Class ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = ClassController;
