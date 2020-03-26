const {Empresas} = require('../models/index');

const EmpresasId = (req,res) => {
    let _id = req.params.id;
    Empresas.findAll({
        where:{
            id : _id
        }
    })
    .then(empresas => res.json(empresas))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpresasId;