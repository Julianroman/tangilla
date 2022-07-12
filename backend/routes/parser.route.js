/**
 * Base url + '/parse'
 */
const express = require('express');
const router = express.Router();

const ParserController = require('../services/parser.service');

router.post('/', ParserController.processText);

module.exports = router;
