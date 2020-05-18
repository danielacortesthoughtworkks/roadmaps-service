'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
     {
    email: DataTypes.STRING
  },
   {freezeTableName: true}
   )
  User.associate = function(models) {
    User.belongsToMany(models.Roadmap, {
      through: 'RoadmapUser',
  })
  }
  return User;
}