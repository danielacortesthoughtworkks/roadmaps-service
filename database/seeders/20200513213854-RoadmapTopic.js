'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'RoadmapTopic',
            [
                {
                    roadmapId: 1,
                    topicId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('RoadmapTopic', null, {}),
}
