var express = require('express');
var router = express.Router();

/* Controladores */
const EmpleadosAll = require('../controllers/EmpleadosAll');
const EmpleadosNombre = require('../controllers/EmpleadosNombre');
const EmpleadosEmpresas = require('../controllers/EmpleadosEmpresas');
const EmpleadosByNombre = require('../controllers/EmpleadosByNombre');

// Rutas
router.get('/', EmpleadosAll);
router.get('/empresas', EmpleadosEmpresas);
router.get('/nombre/:nombre', EmpleadosNombre);
router.get('/nombres/:nombre', EmpleadosByNombre);

module.exports = router;
