'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empleados = sequelize.define('Empleados', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    EmpresaId: DataTypes.INTEGER
  }, {});
  Empleados.associate = function(models) {
    // associations can be defined here
    Empleados.belongsTo(models.Empresas);
    Empleados.belongsToMany(models.Proyectos,{
      through: 'EmpleadosProyecto',
      foreignKey: 'ProyectoId'
    })
  };
  return Empleados;
};