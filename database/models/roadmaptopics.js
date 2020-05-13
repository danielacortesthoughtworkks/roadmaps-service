'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoadmapTopics = sequelize.define('RoadmapTopics', {
    roadmapId: DataTypes.INTEGER,
    topicsId: DataTypes.INTEGER
  }, {});
  RoadmapTopics.associate = function(models) {
    // associations can be defined here
  };
  return RoadmapTopics;
};