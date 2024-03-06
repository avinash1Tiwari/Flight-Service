'use strict';

const {Enum} = require('../utils/common')
const { BUSSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS } = Enum.SEAT_TYPE


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model : 'airplanes',
          key : 'id'
        },
        onDelete:'CASCADE'
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false,
       
      },
      column: {
        type: Sequelize.STRING,
        allowNull:false
      },
      seatType: {
        type: Sequelize.ENUM,
        values : [BUSSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
        defaultValue : ECONOMY,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};