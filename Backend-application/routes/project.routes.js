const express = require('express');
const { createProject, getProject, updateProject, deleteProject } = require('../controllers/project.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { validateProject } = require('../middlewares/validation.middleware');

const router = express.Router();

router.post('/', [verifyToken, validateProject], createProject);
router.get('/:id', verifyToken, getProject);
router.put('/:id', verifyToken, updateProject);
router.delete('/:id', verifyToken, deleteProject);

module.exports = router;
