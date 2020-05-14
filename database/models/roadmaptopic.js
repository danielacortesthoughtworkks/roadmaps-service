'use strict'
module.exports = (sequelize, DataTypes) => {
    const RoadmapTopic = sequelize.define(
        'RoadmapTopic',
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
            TopicId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Topic',
                    key: 'id',
                },
                field: 'topicId',
            },
        },
        { freezeTableName: true }
    )
    return RoadmapTopic
}
