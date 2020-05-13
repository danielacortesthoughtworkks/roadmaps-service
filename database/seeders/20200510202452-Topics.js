'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Topics',
    [
      {
        name: 'Topic 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Topic 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Topics', null, {}),
};