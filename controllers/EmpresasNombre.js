const {Empresas} = require('../models/index');

const EmpresasNombre = (req,res) => {
	let _nombre = req.params.nombre;
    Empresas.findAll({
    	where: {
    		nombre : _nombre
    	}
    })
    .then(empresas => res.json(empresas))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpresasNombre;