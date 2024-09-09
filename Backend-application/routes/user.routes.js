const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/user.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', [verifyToken, isAdmin], createUser);
router.get('/:id', [verifyToken], getUser);
router.put('/:id', [verifyToken, isAdmin], updateUser);
router.delete('/:id', [verifyToken, isAdmin], deleteUser);

module.exports = router;
