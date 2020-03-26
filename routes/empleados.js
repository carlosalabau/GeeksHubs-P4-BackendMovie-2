var express = require('express');
var router = express.Router();

/* Controladores */
const EmpleadosAll = require('../controllers/EmpleadosAll');
const EmpleadosId = require('../controllers/EmpleadosId');
const EmpleadosEmpresas = require('../controllers/EmpleadosEmpresa');
const EmpleadosByNombre = require('../controllers/EmpleadosNombre');

// Rutas
router.get('/', EmpleadosAll);
router.get('/empresas', EmpleadosEmpresas);
router.get('/:id', EmpleadosId);
router.get('/nombres/:nombre', EmpleadosByNombre);

module.exports = router;
