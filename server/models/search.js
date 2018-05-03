'use strict';
module.exports = (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  Search.associate = function(models) {
    // associations can be defined here
    Search.hasMany(models.Result, {
      foreignKey: 'searchId'
    })
  };
  return Search;
};