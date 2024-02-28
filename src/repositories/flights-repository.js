const {Flights} = require('../models');
const crudRepository = require('./crud-operations');

class FlightRepository extends crudRepository{
   
    constructor(){
        super(Flights);
    }
    // const s = "adffg";
}


// console.log("sdj")

// with above inheritence , all things have been came 
// from parent class, i.e, from crudRepository

// we can write our custom operation function to 
// perform some function on DB.

module.exports = FlightRepository;