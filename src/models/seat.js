'use strict';
const {
  Model
} = require('sequelize');

const {Enum} = require('../utils/common')
const { BUSSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS } = Enum.SEAT_TYPE


module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.airplanes,{
        foreignKey:'airplaneId',
      })
    }
  }
  Seat.init({
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type : DataTypes.INTEGER,
      allowNull:false
    },
    column: {
      type : DataTypes.STRING,
      allowNull:false
    },
    seatType: {
      type : DataTypes.ENUM,
      values : [BUSSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue : ECONOMY,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};