const { Project } = require('../models/project.model');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).send(project);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).send({ message: 'Project not found' });
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).send({ message: 'Project not found' });
    await project.update(req.body);
    res.status(200).send({ message: 'Project updated successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).send({ message: 'Project not found' });
    await project.destroy();
    res.status(200).send({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
