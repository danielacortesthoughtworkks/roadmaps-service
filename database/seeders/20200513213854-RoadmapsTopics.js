'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RoadmapTopics',
    [
      {
        roadmapId: 1,
        topicsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RoadmapTopics', null, {}),
};
