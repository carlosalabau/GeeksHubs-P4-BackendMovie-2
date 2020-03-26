const Modelos = require('../models');

const EmpresasAll = (req,res) => {
    Modelos.findAll()
    .then(empresas => {
        res.json(empresas)
    })
    .catch( err => res.json({msn: err}))
}

module.exports = EmpresasAll;