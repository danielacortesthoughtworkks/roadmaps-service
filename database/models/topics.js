'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topics = sequelize.define('Topics', {
    name: DataTypes.STRING
  }, {});
  Topics.associate = function(models) {
    Topics.belongsToMany(models.Roadmaps, {
      through: 'RoadmapTopics',
      as: 'topics',
      foreignKey: 'roadmapId',
    });
  };
  return Topics;
};