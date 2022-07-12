const { DataTypes, Model } = require('sequelize');
const {sequelize} = require("../utils/db.utils");

class Activity extends Model {
  text;
  analysis;
}

Activity.init({
  text: { type: DataTypes.TEXT('long'), allowNull: false },
  analysis: { type: DataTypes.TEXT('long'), allowNull: false },
}, { sequelize, modelName: 'activity', tableName: 'activity' })

module.exports = { Activity };