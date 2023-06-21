'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company_profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company_profile.init({
    name: DataTypes.STRING,
    field: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    total_employee: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company_profile',
  });
  return Company_profile;
};