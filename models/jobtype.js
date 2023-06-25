'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobType.belongsTo(models.JobListing,{foreignKey: "job_listing_id"})
      JobType.belongsTo(models.Type,{foreignKey: "type_id"})
    }
  }
  JobType.init({
    type_id: DataTypes.INTEGER,
    job_listing_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobType',
  });
  return JobType;
};