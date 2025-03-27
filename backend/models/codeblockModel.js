const mongoose = require('mongoose');

const codeblockSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },  
  solution: { type: String, required: true },
}, { timestamps: true }); 

module.exports = mongoose.model('Codeblock', codeblockSchema);
