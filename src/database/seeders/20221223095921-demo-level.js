"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Levels",
			[
				{
					description: "basico",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					description: "intermediario",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					description: "avancado",
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Levels", null, {});
	},
};
