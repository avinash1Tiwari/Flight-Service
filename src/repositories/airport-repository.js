const {airports} = require('../models');
const crudRepository = require('./crud-operations');


class AirportRepository extends crudRepository{
   
    constructor(){
        super(airports);
    }
    // const s = "adffg";
}


console.log("sdj")

// with above inheritence , all things have been came 
// from parent class, i.e, from crudRepository

// we can write our custom operation function to 
// perform some function on DB.

module.exports = AirportRepository;