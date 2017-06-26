const db = require('../_db');

const Characters = require('../characters');
const Customization = require('./customization.js');
const Furniture = require('./furniture');
const Game = require('./game');
const HHDCategory = require('./hhdCategory');
const Wallpaper = require('./wallpaper');

Customization.belongsTo(Furniture);
Furniture.belongsTo(HHDCategory);

Furniture.belongsToMany(Characters, { through: obtainedFrom });
Furniture.belongsToMany(Game, { through: furnitureGame });
Wallpaper.belongsToMany(Game, { through: wallpaperGame });

module.exports = db;
