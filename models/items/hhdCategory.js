const Sequelize = require('sequelize');
const db = require('./_db');

var HHDCategory = db.define('hhdCategory', {
	houseDesign: {
		type: Sequelize.STRING,
		allowNull: false
	},

})
