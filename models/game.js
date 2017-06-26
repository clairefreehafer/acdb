const Sequelize = require('sequelize');
const db = require('./_db');

var Game = db.define('game', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	year: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	console: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {
	// hooks etc. - acronym
});
