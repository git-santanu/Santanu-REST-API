'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Registers', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      gender: 'Male',
      age: 55,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Registers', null, {});
  }
};
