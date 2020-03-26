'use strict';

const faker = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const empleadosproyectos  = Array(3).fill().map(()=> Object.assign({
      EmpleadoId: faker.random.number({min:1,max:30}),
      ProyectoId: faker.random.number({min:1,max:20}),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    return queryInterface.bulkInsert('EmpleadosProyectos', empleadosproyectos,{})
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
