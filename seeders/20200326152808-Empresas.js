'use strict';

const fakerEn = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const empresas = Array(10).fill().map(() => Object.assign({
      nombre: fakerEn.company.companyName(),
      ciudad: fakerEn.address.city(),
      EmpleadoId: fakerEn.random.number({min:1,max:30}),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    return queryInterface.bulkInsert('Empresas',empresas,{})
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
