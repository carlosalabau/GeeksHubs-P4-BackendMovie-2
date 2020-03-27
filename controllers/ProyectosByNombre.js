const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Proyectos} = require('../models/index');


const ProyectosByNombre = (req,res) => {
	let _nombre = req.params.nombre;
    Proyectos.findAll( {include: { nombre: { [Op.like]: '%'+_nombre+'%' } }})
    .then(proyectos => res.json(proyectos))
    .catch( err => res.json({msn: err}))
}


module.exports = ProyectosByNombre;