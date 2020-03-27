const {Proyectos} = require('../models/index');

const ProyEmp = (req,res) => {

    Proyectos.findAll()
    .then(project => res.json(project))
    .catch( err => res.json({msn: err}))
}

module.exports = ProyEmp;