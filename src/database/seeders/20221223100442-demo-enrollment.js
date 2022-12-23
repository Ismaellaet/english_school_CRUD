"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Enrollments",
			[
				{
					status: "confirmado",
					student_id: 1,
					class_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: "confirmado",
					student_id: 2,
					class_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: "confirmado",
					student_id: 3,
					class_id: 2,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: "confirmado",
					student_id: 4,
					class_id: 3,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: "cancelado",
					student_id: 1,
					class_id: 2,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					status: "cancelado",
					student_id: 2,
					class_id: 2,
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Enrollments", null, {});
	},
};
