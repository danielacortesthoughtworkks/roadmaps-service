'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'Topic',
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
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('Topic', null, {}),
}
