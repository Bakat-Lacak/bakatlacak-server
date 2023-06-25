'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Type.hasMany(models.JobType,{foreignKey: "type_id"})
      Type.belongsToMany(models.JobListing,{foreignKey: "type_id", through: models.JobType})
    }
  }
  Type.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};