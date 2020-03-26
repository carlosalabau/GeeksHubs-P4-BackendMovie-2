const {Proyectos,Empleados} = require('../models/index');

const ProyectosByEmpleados = (req,res) => {
    Proyectos.findAll({
    	include: [Empleados]
    })
    .then(proyecto => res.json(proyecto))
    .catch( err => res.json({msn: err}))
}

module.exports = ProyectosByEmpleados;