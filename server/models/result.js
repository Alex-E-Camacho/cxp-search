'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    url: DataTypes.STRING
  });
  
  Result.associate = function(models) {
    // associations can be defined here
    Result.belongsTo(models.Search, {
      foreignKey: 'searchId'
    })
  };
  return Result;
};