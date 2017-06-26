const Sequelize = require('sequelize');
const db = require('../_db');

var Furniture = db.define('furniture', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	purchasePrice: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	resalePrice: {
		type: Sequelize.STRING,
		allowNull: false
	},
	obtainedFrom: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: false
	},
	setSeries: {
		type: Sequelize.STRING,
		allowNull: false
	},
	group: {
		type: Sequelize.STRING,
		allowNull: true
	},
	hhaTheme: {
		type: Sequelize.STRING,
		allowNull: true
	},
	style: {
		type: Sequelize.STRING,
		allowNull: true
	},
	colors: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: true
	},
	size: {
		type: Sequelize.ARRAY(Sequelize.INTEGER)
	},
	otherInfo: {
		type: Sequelize.TEXT,
		allowNull: true
	}
});
