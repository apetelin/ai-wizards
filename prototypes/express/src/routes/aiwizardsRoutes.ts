const express = require('express');
const { convertPipeline } = require('../controllers/chatopenaiController');
const router = express.Router();

router.post('/convertPipeline', convertPipeline);

module.exports = router;