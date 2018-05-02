'use strict';
module.exports = (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Search.associate = function(models) {
    // associations can be defined here
  };
  return Search;
};