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
      FightNumber:{ 
        type : Sequelize.STRING,
        allowNull:false
      },
        
      AirplaneId: {
        type : Sequelize.INTEGER,
        allowNull:false,
        // references : {
        //   model : 'Airplane',
        //   key : 'id'
        // },
        // onDelete:'CASCADE'
    },
      DepartureAirportId: {
        type : Sequelize.STRING,
        allowNull:false,
        references : {
          model : 'airports',
          key : 'code'
        },
        onDelete:'CASCADE'
       
    },
      ArrivalAirportId: {
        type : Sequelize.STRING,
        allowNull:false,
        references : {
          model : 'airports',
          key : 'code'
        },
        onDelete:'CASCADE'
        
    },
      ArrivalTime: {
        type : Sequelize.DATE,
        allowNull:false
    },
      DepartureTime: {
        type : Sequelize.DATE,
        allowNull:false
    },
      Price: {
        type : Sequelize.INTEGER,
        allowNull:false
    },
      BoardingGate: { 
        type : Sequelize.STRING,
        allowNull:false
      },
      TotalSeats: {
        type : Sequelize.INTEGER,
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
    await queryInterface.dropTable('Flights');
  }
};