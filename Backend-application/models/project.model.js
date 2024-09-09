const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Project = sequelize.define('Project', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  deadline: { type: DataTypes.DATE, allowNull: false },
}, { timestamps: true });

module.exports = Project;
