"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Levels",
			[
				{
					level_description: "basico",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					level_description: "intermediario",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					level_description: "avancado",
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
