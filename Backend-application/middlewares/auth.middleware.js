const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('No token provided.');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send('Failed to authenticate token.');
    req.userId = decoded.id;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (user.roleId !== 1) {
      return res.status(403).send('Requires Admin Role!');
    }
    next();
  });
};
