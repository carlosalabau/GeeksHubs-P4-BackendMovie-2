const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Proyectos} = require('../models/index');

const ProyectosByNombre = (req, res) => {
    let _nombre = String(req.params.nombre);
    Proyectos.findAll( {where: { nombre: { [Op.like]: '%'+_nombre+'%' } }})
    .then(project => {
      res.json(project)
    }).catch(err =>{
      res.statusCode = 400;
      res.json({status: 'KO', message: err})
    })
  };

module.exports = ProyectosByNombre;