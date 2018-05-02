'use strict';
module.exports = (sequelize, DataTypes) => {
  var search = sequelize.define('search', {
    text: DataTypes.STRING
  }, {});
  search.associate = function(models) {
    // associations can be defined here
  };
  return search;
};