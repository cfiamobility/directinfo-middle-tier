const express = require("express");
const db = require("../config/database.js");
const directinfo = db.import("../models/people.js");
const updatedate = db.import("../models/updatedate.js");

//GEDS update
const opengeds = db.import("../models/opengeds.js");
const updatedategeds = db.import("../models/updatedategeds.js");

const Sequelize = require("sequelize");
const op = Sequelize.Op;
const router = express.Router();

router.get("/", (req, res) => {
	directinfo.findAll({
		attributes: { exclude: ["id", "createdAt", "updatedAt"]}
	})
	.then (users => {
		res.json(users);
	});
});

router.get("/update", (req, res) => {
	updatedate.findAll({
		attributes: { exclude: ["id", "createdAt", "updatedAt"]}
	})
	.then(date => {
		res.send(date);
	});
});
router.get("/geds", (req, res) => {
	opengeds.findAll({
		attributes: { exclude: ["id", "createdAt", "updatedAt"]}
	})
	.then (users => {
		res.json(users);
	});
});

router.get("/updategeds", (req, res) => {
	updatedategeds.findAll({
		attributes: { exclude: ["id", "createdAt", "updatedAt"]}
	})
	.then(result => {
		var date = JSON.stringify(result[0].date);
		res.send(date)
	});
});

module.exports = router;