'use strict';

const fakerEs = require('faker/locale/es');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const empleados = Array(30).fill().map( () => Object.assign(
      {
        nombre:fakerEs.name.firstName(),
        apellidos: fakerEs.name.lastName(),
        EmpresaId: fakerEs.random.number({min:1,max:10}),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ))
      return queryInterface.bulkInsert('Empleados', empleados, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
