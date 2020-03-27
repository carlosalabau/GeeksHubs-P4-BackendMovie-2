'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proyectos = sequelize.define('Proyectos', {
    nombre: DataTypes.STRING
  }, {});
  Proyectos.associate = function(models) {
    // associations can be defined here
    Proyectos.belongsToMany(models.Empleados,{
      through: models.EmpleadosProyectos
    })
  };
  return Proyectos;
};