const {Empleados} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const EmpleadosNombre = (req,res) => {
	let _nombre = req.params.nombre;
    Empleados.findAll( {where: { nombre: { [Op.like]: '%'+_nombre+'%' } }})
    .then(empleados => res.json(empleados))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpleadosNombre;