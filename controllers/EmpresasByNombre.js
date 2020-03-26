const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Empresas} = require('../models/index');

const EmpresasByNombre = (req, res) => {
    let _nombre = String(req.params.nombre);
    Empresas.findAll( {where: { nombre: { [Op.like]: '%'+_nombre+'%' } }})
    .then(project => {
      res.json(project)
    }).catch(err =>{
      res.statusCode = 400;
      res.json({status: 'KO', message: err})
    })
  };

module.exports = EmpresasByNombre;