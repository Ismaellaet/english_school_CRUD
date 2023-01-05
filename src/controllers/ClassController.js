const db = require("../app/models");
const { ClassesServices } = require("../services");
const classesServices = new ClassesServices();

class ClassController {
	static async getAllClasses(req, res) {
		try {
			const classes = await classesServices.read();
			return res.json(classes);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async getClassByPk(req, res) {
		const { id } = req.params;

		try {
			const classFound = await classesServices.read({ id });

			if (!classFound?.length) {
				return res.json({ message: `Class ${id} not found!` });
			}

			return res.json(classFound);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async createClass(req, res) {
		try {
			const classCreated = await classesServices.create(req.body);
			return res.status(201).json(classCreated);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async updateClass(req, res) {
		const { id } = req.params;

		try {
			await classesServices.update({ id }, req.body);
			return res.json({ message: `Class ${id} updated successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}

	static async deleteClass(req, res) {
		const { id } = req.params;

		try {
			await classesServices.delete({ id });
			return res.json({ message: `Class ${id} deleted successfully!` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = ClassController;
