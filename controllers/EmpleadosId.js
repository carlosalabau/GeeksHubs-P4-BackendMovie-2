const {Empleados} = require('../models/index');

const EmpleadosId = (req,res) => {
    let _id = req.params.id;
    Empleados.findAll({
        where:{
            id : _id
        }
    })
    .then(empleados => res.json(empleados))
    .catch( err => res.json({msn: err}))
}

module.exports = EmpleadosId;