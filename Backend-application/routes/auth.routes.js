const express = require('express');
const { signup, login } = require('../controllers/auth.controller');
const { validateSignup } = require('../middlewares/validation.middleware');

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/login', login);

module.exports = router;
