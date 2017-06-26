const Sequelize = require('sequelize');
const db = require('../db');

var Flooring = db.define('flooring', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	purchasePrice: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	resalePrice: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	obtainedFrom: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: false
	}
});

module.exports = Flooring;
