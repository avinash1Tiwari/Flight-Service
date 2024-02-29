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
    
      this.belongsTo(models.airplanes,{
        foreignKey:'AirplaneId'
      })
      

      this.belongsTo(models.airports,{
        foreignKey:'DepartureAirportId', 
        targetKey: 'code',
      })

      this.belongsTo(models.airports,{
        foreignKey:'ArrivalAirportId',
        targetKey: 'code',
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