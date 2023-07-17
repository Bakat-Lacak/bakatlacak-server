'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobApplication.belongsTo(models.User,{foreignKey: "user_id"})
      JobApplication.belongsTo(models.JobListing,{foreignKey: "job_listing_id"})
    }
  }
  JobApplication.init({
    user_id: DataTypes.INTEGER,
    job_listing_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isIn: [['applied', 'onreview', 'accepted', 'rejected']]
      }
    },
    resume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobApplication',
  });
  return JobApplication;
};