const express = require('express');
const cacheController = require('../controllers/cache');
const router = express.Router();

router.get('/usrlist', cacheController.userlist);

module.exports = router;