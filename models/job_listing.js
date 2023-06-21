'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_listing.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    location: DataTypes.STRING,
    salary_start: DataTypes.INTEGER,
    salary_end: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job_listing',
  });
  return Job_listing;
};