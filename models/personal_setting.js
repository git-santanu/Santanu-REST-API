'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal_Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personal_Setting.init({
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    company_branch_id: DataTypes.INTEGER,
    isdefault_Project: DataTypes.BOOLEAN,
    email_on_daily_basis: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Personal_Setting',
  });
  return Personal_Setting;
};