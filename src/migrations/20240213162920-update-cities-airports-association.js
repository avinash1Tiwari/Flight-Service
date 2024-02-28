'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint('airports',{
      type:'foreign key',
      name:'city_fkey_constrint',
      fields:['cityId'],
      references:{
        table:'cities',
        field :'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })


    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('airports','city_fkey_constrint')
  }
};
