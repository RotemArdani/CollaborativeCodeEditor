const Codeblock = require('../models/codeblockModel');

exports.getAllCodeblocks = async (req, res) => {
  try {
    const codeblocks = await Codeblock.find();
    res.json(codeblocks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching code blocks' });
  }
};

exports.getCodeblockById = async (req, res) => {
  try {
    console.log("blockID from controller:", req.params.id); 
    const codeblock = await Codeblock.findById(req.params.id);
    if (!codeblock) return res.status(404).json({ message: 'Codeblock not found' });
    res.json(codeblock);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching code block' });
  }
};
