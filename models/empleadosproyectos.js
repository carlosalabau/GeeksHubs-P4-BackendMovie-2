'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmpleadosProyectos = sequelize.define('EmpleadosProyectos', {
    EmpleadoId: DataTypes.INTEGER,
    ProyectoId: DataTypes.INTEGER
  }, {});
  EmpleadosProyectos.associate = function(models) {
    // associations can be defined here
  };
  return EmpleadosProyectos;
};