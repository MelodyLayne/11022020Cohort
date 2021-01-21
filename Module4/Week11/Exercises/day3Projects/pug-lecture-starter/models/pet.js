'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    petTypeId: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {});
  Pet.associate = function(models) {
    // many side
    Pet.belongsTo(models.PetType, { foreignKey: 'petTypeId' });

    const columnMapping = {
      through:    'PetOwner', // Join table
      otherKey:   'ownerId',  // Key that points to to the other entity, Owner
      foreignKey: 'petId',    // Key that points this entity, Pet
    };
    Pet.belongsToMany(models.Owner, columnMapping);
  };
  return Pet;
};
