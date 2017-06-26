const Sequelize = require('sequelize');
const db = require('./_db');

var Wallpaper = db.define('wallpaper', {
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

module.exports = Wallpaper;
