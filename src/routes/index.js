const express = require("express");
const peopleRoutes = require("./peopleRoutes");

module.exports = app => {
	app.use(express.json(), peopleRoutes);
};
