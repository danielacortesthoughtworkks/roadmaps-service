'use strict'
module.exports = (sequelize, DataTypes) => {
    const Roadmap = sequelize.define(
        'Roadmap',
        {
            name: DataTypes.STRING,
        },
        { freezeTableName: true }
    )
    Roadmap.associate = function (models) {
        Roadmap.belongsToMany(models.Topic, {
            through: 'RoadmapTopic',
        }),
        Roadmap.belongsToMany(models.User, {
            through: 'RoadmapUser',
        })
    }
    return Roadmap
}
