const {Empresas} = require('../models/index');

const EmpresasAll = (req,res) => {
    Empresas.findAll()
    .then(empresas => res.json(empresas))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpresasAll;