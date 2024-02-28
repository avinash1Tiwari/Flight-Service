const {Flights,airplanes} = require('../models');
const crudRepository = require('./crud-operations');

class FlightRepository extends crudRepository{
   
    constructor(){
        super(Flights);
    }


// 1. before apply sort filter

    // async getAllFlights(filter) {
    //     console.log("Filter in repository:", filter);
    //     const response = await Flights.findAll({
    //         where: filter

    //     });

    //     return response;
        
    // }



    


// 2. after apply sort filter
    //  async getAllFlights(filter,sort) {

        

    //     console.log("Filter in repository:", filter);
    //     const response = await Flights.findAll({
    //         where: filter,
    //         order : sort

    //     });

    //     return response;
        
    // }





    // 2. previosly we are making seperate query for each of query like(sort,date,price,etc) ,
    // mow with the help of joins we can make all query in single run
    async getAllFlights(filter,sort) {

        

        console.log("Filter in repository:", filter);
        const response = await Flights.findAll({
            where: filter,
            order : sort,
            include :{
                model:airplanes,
                required : true
            }

        });

        return response;
        
    }
}

// console.log("djkk")

// snkvml,,




// console.log("sdj")

// with above inheritence , all things have been came 
// from parent class, i.e, from crudRepository

// we can write our custom operation function to 
// perform some function on DB.

module.exports =  FlightRepository


    
