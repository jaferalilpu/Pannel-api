const { Role } = require('../models/role.model');
const { User } = require('../models/user.model');

exports.assignRole = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return res.status(404).send({ message: 'User not found' });
    
    const role = await Role.findByPk(req.body.roleId);
    if (!role) return res.status(404).send({ message: 'Role not found' });
    
    user.roleId = role.id;
    await user.save();
    res.status(200).send({ message: 'Role assigned successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
