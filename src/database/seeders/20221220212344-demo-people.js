"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"People",
			[
				{
					name: "Ana Souza",
					active: true,
					email: "ana@ana.com",
					role: "estudante",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: "Marcos Cintra",
					active: true,
					email: "marcos@marcos.com",
					role: "estudante",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: "Felipe Cardoso",
					active: true,
					email: "felipe@felipe.com",
					role: "estudante",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: "Sandra Gomes",
					active: false,
					email: "sandra@sandra.com",
					role: "estudante",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: "Paula Morais",
					active: true,
					email: "paula@paula.com",
					role: "docente",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: "Sergio Lopes",
					active: true,
					email: "sergio@sergio.com",
					role: "docente",
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("People", null, {});
	},
};
