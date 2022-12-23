"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn("People", "createdAt", "created_at");
		await queryInterface.renameColumn("People", "updatedAt", "updated_at");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameColumn("People", "created_at", "createdAt");
		await queryInterface.renameColumn("People", "updated_at", "updatedAt");
	},
};
