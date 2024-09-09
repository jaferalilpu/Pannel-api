const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};
