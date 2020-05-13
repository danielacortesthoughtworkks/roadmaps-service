'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roadmaps = sequelize.define('Roadmap', {
    name: DataTypes.STRING
  }, {});
  Roadmaps.associate = function(models) {
    Roadmaps.belongsToMany(models.Topics, {
      through: 'RoadmapTopics',
      as: 'roadmaps',
      foreignKey: 'topicsId',
    });
  };
  return Roadmaps;
};