'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'Roadmap',
            [
                {
                    name: 'Roadmap 1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Roadmap 2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('Roadmap', null, {}),
}
