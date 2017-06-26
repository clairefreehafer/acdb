const Sequelize = require('sequelize');
const db = require('../db');

var Customization = db.define('customization', {
	originalDesign: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	designChoices: {
		type: Sequelize.STRING,
		allowNull: false
	},
	changeFee: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	revertFee: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});
