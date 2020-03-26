const {Empleados,Empresas} = require('../models/index');

const EmpleadosEmpresa = (req,res) => {
    Empleados.findAll({
    	include: [Empresas]
    })
    .then(empleados => res.json(empleados))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpleadosEmpresa;