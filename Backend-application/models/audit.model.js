const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const AuditLog = sequelize.define('AuditLog', {
  action: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  projectId: { type: DataTypes.INTEGER, allowNull: true },
}, { timestamps: true });

module.exports = AuditLog;
