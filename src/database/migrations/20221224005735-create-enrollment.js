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
			student_id: {
				allowNull: false,
				references: { model: "people", key: "id" },
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
			},
			class_id: {
				references: { model: "classes", key: "id" },
				type: Sequelize.INTEGER,
				onDelete: "SET NULL",
			},
			status: {
				type: Sequelize.STRING,
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
