const express = require('express');
const router = express.Router();
const { getAllCodeblocks, getCodeblockById } = require('../controllers/codeblockController');

router.get('/codeblocks', getAllCodeblocks);

router.get('/codeblocks/:id', getCodeblockById);

module.exports = router;
