'use strict'
module.exports = (sequelize, DataTypes) => {
    const RoadmapUser = sequelize.define(
        'RoadmapUser',
        {
            RoadmapId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Roadmap',
                    key: 'id',
                },
                field: 'roadmapId',
            },
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'id',
                },
                field: 'userId',
            },
        },
        { freezeTableName: true }
    )
    return RoadmapUser
}