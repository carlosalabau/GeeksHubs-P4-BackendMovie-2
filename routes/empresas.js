var express = require('express');
var router = express.Router();

/* Controladores */
const EmpresasAll = require('../controllers/EmpresasAll')
const EmpresasNombre = require('../controllers/EmpresasNombre');
const EmpresasId = require('../controllers/EmpresasId');
const EmpresasByNombre = require('../controllers/EmpresasByNombre');

// Rutas
router.get('/', EmpresasAll);
router.get('/:id', EmpresasId);
router.get('/nombre/:nombre', EmpresasNombre);
router.get('/nombres/:nombre', EmpresasByNombre);

module.exports = router;
