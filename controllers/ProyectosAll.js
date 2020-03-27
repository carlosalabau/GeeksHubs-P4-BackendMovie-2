const {Proyectos, Empleados} = require('../models/index');

const ProyectosAll = (req,res) => {
    Proyectos.findAll({
        include: [Empleados]
    })
    .then(Proyectos => res.json(Proyectos))
    .catch( err => res.json({msn: err}))
}

module.exports = ProyectosAll;