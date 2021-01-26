'use strict';
module.exports = (sequelize, DataTypes) => {
  const pasta = sequelize.define('pasta', {
    label: DataTypes.TEXT,
    description: DataTypes.TEXT,
    taste: DataTypes.NUMERIC
  }, {});
  pasta.associate = function(models) {
    Pasta.hasOne(models.Sauce, {foreignKey: 'sauceId' })
    Pasta.hasOne(models.Noodles, { foreignKey: 'noodlesId' });
  };
  return pasta;
};
