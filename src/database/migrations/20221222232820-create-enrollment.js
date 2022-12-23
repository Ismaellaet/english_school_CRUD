"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Enrollments", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.STRING,
			},
			student_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "people", key: "id" },
			},
			class_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: "classes", key: "id" },
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Enrollments");
	},
};
