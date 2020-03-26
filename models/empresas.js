'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresas = sequelize.define('Empresas', {
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    EmpleadoId: DataTypes.INTEGER
  }, {});
  Empresas.associate = function(models) {
    // associations can be defined here
    Empresas.hasMany(models.Empleados)
  };
  return Empresas;
};