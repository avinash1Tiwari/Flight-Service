'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
      // this.belongsTo(models.airplanes,{
      //   foreignKey:'AirplaneId',
      // })

      // after adding alias
      this.belongsTo(models.airplanes,{
        foreignKey:'AirplaneId',
        as:'airplanes_details'
      })
      

      // this.belongsTo(models.airports,{
      //   foreignKey:'DepartureAirportId', 
      //   targetKey: 'code',
      //   
      // })

      // after adding alias
      this.belongsTo(models.airports,{
        foreignKey:'DepartureAirportId', 
        targetKey: 'code',
        as:'departure_airport'
      })

      // this.belongsTo(models.airports,{
      //   foreignKey:'ArrivalAirportId',
      //   targetKey: 'code',
      //  
      // })


      // after adding alias
      this.belongsTo(models.airports,{
        foreignKey:'ArrivalAirportId',
        targetKey: 'code',
        as:'arrival_airport'
      })
    }


    
  }
  Flights.init({
    FightNumber:{ 
      type : DataTypes.STRING,
      allowNull:false
    },
      
    AirplaneId: {
      type : DataTypes.INTEGER,
      allowNull:false,
  },
    DepartureAirportId: {
      type : DataTypes.STRING,
      allowNull:false,
   
  },
    ArrivalAirportId: {
      type : DataTypes.STRING,
      allowNull:false,
     
  },
    ArrivalTime: {
      type : DataTypes.DATE,
      allowNull:false
  },
    DepartureTime: {
      type : DataTypes.DATE,
      allowNull:false
  },
    Price: {
      type : DataTypes.INTEGER,
      allowNull:false
  },
    BoardingGate: { 
      type : DataTypes.STRING,
      allowNull:false
    },
    TotalSeats: {
      type : DataTypes.INTEGER,
      allowNull:false
  }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};