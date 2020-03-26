const {Proyectos} = require('../models/index');

const ProyectosId = (req,res) => {
    let _id = req.params.id;
    Proyectos.findAll({
        where:{
            id : _id
        }
    })
    .then(proyectos => res.json(proyectos))
    .catch( err => res.json({msn: err}))
}

module.exports = ProyectosId;