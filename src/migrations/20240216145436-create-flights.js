'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FightNumber: {
        type: Sequelize.STRING
      },
      AirplaneId: {
        type: Sequelize.INTEGER
      },
      DepartureAirportId: {
        type: Sequelize.INTEGER
      },
      ArrivalAirportId: {
        type: Sequelize.INTEGER
      },
      ArrivalTime: {
        type: Sequelize.DATE
      },
      DepartureTime: {
        type: Sequelize.DATE
      },
      Price: {
        type: Sequelize.INTEGER
      },
      BoardingGate: {
        type: Sequelize.STRING
      },
      TotalSeats: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Flights');
  }
};