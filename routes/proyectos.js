var express = require('express');
var router = express.Router();

/* Controladores */
const ProyectosAll = require('../controllers/ProyectosAll');
const ProyEmp = require('../controllers/ProyEmp');
const ProyectosId = require('../controllers/ProyectosId');
const ProyectosByNombre = require('../controllers/ProyectosByNombre');

// Rutas
router.get('/', ProyectosAll);
router.get('/:id', ProyectosId);
router.get('/projects', ProyEmp);
router.get('/nombres/:nombre', ProyectosByNombre);

module.exports = router;