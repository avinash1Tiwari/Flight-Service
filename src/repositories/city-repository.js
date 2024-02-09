const {city} = require('../models');
const crudRepository = require('./crud-operations');


class CityRepository extends crudRepository{
   
    constructor(){
        super(city);
    }

}



module.exports = CityRepository;