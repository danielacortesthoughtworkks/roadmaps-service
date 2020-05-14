'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('RoadmapTopic', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            roadmapId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Roadmap',
                    key: 'id',
                },
            },
            topicId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Topic',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('RoadmapTopic')
    },
}
