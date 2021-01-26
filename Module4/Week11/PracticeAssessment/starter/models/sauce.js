'use strict';
module.exports = (sequelize, DataTypes) => {
  const sauce = sequelize.define('sauce', {
    name: DataTypes.TEXT,
    color: DataTypes.TEXT
  }, {});
  sauce.associate = function(models) {
    Sauce.hasMany(models.Pasta, { foreignKey: 'pastaId' });
  };
  return sauce;
};
