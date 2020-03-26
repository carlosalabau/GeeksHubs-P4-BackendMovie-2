const {Proyectos} = require('../models/index');

const ProyectosAll = (req,res) => {
    Proyectos.findAll()
    .then(Proyectos => res.json(Proyectos))
    .catch( err => res.json({msn: err}))
}

module.exports = ProyectosAll;