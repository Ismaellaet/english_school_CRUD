const Services = require("./Services");
const db = require("../app/models");

class PeopleServices extends Services {
	constructor() {
		super("Person");
		this._enrollemnts = new Services("Enrollment");
	}

	async restore(id) {
		return await db[this._model].restore({ where: { id } });
	}

	async cancelPersonAndTheirEnrollments(studentId) {
		return db.sequelize.transaction(async transaction => {
			await super.update({ active: false }, { id: studentId }, transaction);
			await this._enrollemnts.update(
				{ status: "cancelado" },
				{ student_id: studentId },
				transaction
			);
		});
	}
}

module.exports = PeopleServices;
