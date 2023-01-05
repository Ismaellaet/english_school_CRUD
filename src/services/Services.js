const db = require("../app/models");

class Services {
	constructor(model) {
		this._model = model;
	}

	async create(item) {
		return await db[this._model].create(item);
	}

	async read(item, limit = 10, offset = 0) {
		return await db[this._model].findAll({
			where: {
				...item,
			},
			limit,
			offset,
		});
	}

	async update(item, where, transaction = {}) {
		return await db[this._model].update(item, { where: {...where}, transaction: transaction});
	}

	async delete(where) {
		return await db[this._model].destroy({ where });
	}
}

module.exports = Services;
