"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Classes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			teacher_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "people", key: "id" },
			},
			start_date: {
				type: Sequelize.DATEONLY,
			},
			level_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "levels", key: "id" },
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
		await queryInterface.dropTable("Classes");
	},
};
