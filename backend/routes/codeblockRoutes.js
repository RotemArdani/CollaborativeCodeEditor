const express = require('express');
const router = express.Router();
const { getAllCodeblocks, getCodeblockById } = require('../controllers/codeblockController');

router.get('/', getAllCodeblocks);
router.get('/:id', getCodeblockById);

module.exports = router;
