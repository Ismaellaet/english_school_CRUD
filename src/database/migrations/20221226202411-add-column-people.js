"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("People", "deleted_at", {
			type: Sequelize.DATE,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("People", "deleted_at");
	},
};
