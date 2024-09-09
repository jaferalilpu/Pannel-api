const { AuditLog } = require('../models/audit.model');

exports.createLog = async (action, userId, projectId = null) => {
  await AuditLog.create({ action, userId, projectId });
};
