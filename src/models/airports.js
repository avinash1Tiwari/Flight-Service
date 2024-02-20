'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cities,{
        foreignKey:'cityId',
        onDelete:'CASCADE',
        onUpdate : 'CASCADE'
      });


      this.hasMany(models.Flights,{
        foreignKey:'DepartureAirportId',
        onDelete:'CASCADE'
      })

      this.hasMany(models.Flights,{
        foreignKey:'ArrivalAirportId',
        onDelete:'CASCADE'
      })


  
    }

    
  }
  airports.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    address: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'airports',
  });
  return airports;
};