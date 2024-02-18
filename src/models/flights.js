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
      // define association here
    }
  }
  Flights.init({
    FightNumber: DataTypes.STRING,
    AirplaneId: DataTypes.INTEGER,
    DepartureAirportId: DataTypes.INTEGER,
    ArrivalAirportId: DataTypes.INTEGER,
    ArrivalTime: DataTypes.DATE,
    DepartureTime: DataTypes.DATE,
    Price: DataTypes.INTEGER,
    BoardingGate: DataTypes.STRING,
    TotalSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};