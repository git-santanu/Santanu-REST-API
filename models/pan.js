'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user').User;
module.exports = (sequelize, DataTypes) => {
  class PAN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.PAN.belongsTo(models.User,{
        foreignKey: 'user_id'
      })
    }
  }
  PAN.init({
    user_id: DataTypes.INTEGER,
    pan_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PAN',
  });
  return PAN;
};