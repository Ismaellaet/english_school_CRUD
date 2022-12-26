const db = require("../app/models");

class LevelController {
	static async list(req, res) {
		try {
			const levels = await db.Level.findAll();
			return res.json(levels);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async read(req, res) {
		const { id } = req.params;

		try {
			const level = await db.Level.findByPk(id);

			if (!level) {
				return res.json({ message: `Level ${id} not found!` });
			}

			return res.json(level);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async create(req, res) {
		try {
			const level = await db.Level.create(req.body);
			return res.status(201).json(level);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async update(req, res) {
		const { id } = req.params;
		const newInfos = req.body;

		try {
			await db.Level.update(newInfos, { where: { id } });
			const level = await db.Level.findByPk(id);

			if (!level) {
				return res.json({ message: `Level ${id} not found!` });
			}

			return res.json(level);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async delete(req, res) {
		const { id } = req.params;
		try {
			await db.Level.destroy({ where: { id }});
			return res.json({ message: `Level ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = LevelController;
