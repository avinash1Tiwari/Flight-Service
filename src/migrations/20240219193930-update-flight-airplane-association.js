'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Flights',{
      type:'foreign key',
      name:'city_fkey_constrint1',
      fields:['AirplaneId'],
      references:{
        table:'airplanes',
        field :'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Flights','city_fkey_constrint1')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
