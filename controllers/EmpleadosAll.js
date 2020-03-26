const {Empleados} = require('../models/index');

const EmpleadosAll = (req,res) => {
    Empleados.findAll()
    .then(empleados => res.json(empleados))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpleadosAll;