'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fees', [
      { description: 'Service', amount: 96.40, invoiceId: 3, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { description: 'Service', amount: 90.40, invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
      { description: 'Service', amount: 21.04, invoiceId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09' },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fees', {
        invoiceId: [1, 2, 3, 4]
      });
  }
};
