const express = require('express');
const { createTemplate, sendSMS } = require('../controllers/smsController');

const router = express.Router();

router.post('/templates', createTemplate);
router.post('/send', sendSMS);

module.exports = router;
