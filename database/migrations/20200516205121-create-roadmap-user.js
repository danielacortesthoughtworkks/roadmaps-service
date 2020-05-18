'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RoadmapUser', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roadmapId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Roadmap',
            key: 'id',
        },
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'User',
          key: 'id',
      },
  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RoadmapUser');
  }
};