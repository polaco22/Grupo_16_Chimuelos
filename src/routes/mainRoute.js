// Módulos
const express = require('express');
const router = express.Router();

// Require Controller
const mainController = require('../controllers/mainController');

// Seteando la ruta de vista
router.get('/', mainController.home);

// Exports Router
module.exports = router;