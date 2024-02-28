const {cities} = require('../models');
const crudRepository = require('./crud-operations');


class CityRepository extends crudRepository{
   
    constructor(){
        super(cities);
    }

}



module.exports = CityRepository;