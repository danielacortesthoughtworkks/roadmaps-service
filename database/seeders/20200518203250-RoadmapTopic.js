'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'RoadmapTopic',
            [
                {
                    roadmapId: 3,
                    topicId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('Topic', null, {}),
}
