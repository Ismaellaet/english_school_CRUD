const { LevelsServices } = require("../services");
const levelsServices = new LevelsServices();

class LevelController {
	static async getAllLevels(req, res) {
		try {
			const levels = await levelsServices.read();
			return res.json(levels);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async getLevelByPk(req, res) {
		const { id } = req.params;

		try {
			const level = await levelsServices.read({ id });

			if (!level?.length) {
				return res.json({ message: `Level ${id} not found!` });
			}

			return res.json(level);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async createLevel(req, res) {
		try {
			const level = await levelsServices.create(req.body);
			return res.status(201).json(level);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async updateLevel(req, res) {
		const { id } = req.params;

		try {
			await levelsServices.update({ id }, req.body);
			return res.json({ message: `Level ${id} updated successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async deleteLevel(req, res) {
		const { id } = req.params;

		try {
			await levelsServices.delete({ id });
			return res.json({ message: `Level ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = LevelController;
