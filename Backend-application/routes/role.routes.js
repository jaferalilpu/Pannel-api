const express = require('express');
const { assignRole } = require('../controllers/role.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/assign/:userId', [verifyToken, isAdmin], assignRole);

module.exports = router;
