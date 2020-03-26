'use strict';

const fakerEn = require('faker/locale/en');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    const proyectos = Array(20).fill().map(() => Object.assign({
      nombre: fakerEn.name.jobArea(),
      createAt: new Date(),
      updateAt: new Date()
    }))

    return queryInterface.bulkInsert('Proyectos',proyectos,{})
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
