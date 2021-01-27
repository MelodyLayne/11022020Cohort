'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EntreeTypes', [
      { name: 'Beef'        , isVegetarian: false },
      { name: 'Chicken'     , isVegetarian: false },
      { name: 'Goat'        , isVegetarian: false },
      { name: 'Jackfruit'   , isVegetarian: true  },
      { name: 'Plant-based' , isVegetarian: true  },
      { name: 'Pork'        , isVegetarian: false },
      { name: 'Soy'         , isVegetarian: true  },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
