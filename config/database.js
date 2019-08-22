const Sequelize = require("sequelize");

const db = new Sequelize("directinfo", "postgres", "123456", {
	host: "localhost",
	port: "5432",
	dialect: "postgres",
	operatorAliases: false,

	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

module.exports = db;

