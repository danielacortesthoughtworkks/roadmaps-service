'use strict'
module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define(
        'Topic',
        {
            name: DataTypes.STRING,
        },
        { freezeTableName: true }
    )
    Topic.associate = function (models) {
        Topic.belongsToMany(models.Roadmap, {
            through: 'RoadmapTopic',
        })
    }
    return Topic
}
