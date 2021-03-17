const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// base path = /api/v1/event
router.post('/', eventController.postEvent);

module.exports = router;