'use strict';
module.exports = (sequelize, DataTypes) => {
  const noodle = sequelize.define( 'Noodles', {
			name: DataTypes.TEXT,
			isStuffed: DataTypes.BOOLEAN,
		},
		{}
	);
  noodles.associate = function(models) {
    Noodles.belongsTo(models.Pasta, { foreignKey: 'pastaId' });
  };
  return noodle;
};
