const {Flights,airplanes,airports,cities} = require('../models');

const {Sequelize} = require('sequelize')
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
    // async getAllFlights(filter,sort) {

        

    //     console.log("Filter in repository:", filter);
    //     const response = await Flights.findAll({
    //         where: filter,
    //         order : sort,
    //         include :{
    //             model:airplanes,
    //             required : true
    //         }

    //     });

    //     return response;
        
    // }













    // 4. 
    // async getAllFlights(filter,sort) {

    //     console.log("Filter in repository:", filter);
    //     const response = await Flights.findAll({
    //         where: filter,
    //         order : sort,
    //         include :[
    //             {
    //             model:airplanes,
    //             required : true,
                
    //             },


                // this issue is comming
    //             {
    //                 model: airports,
    //                 required: true,
    //                 On: {
    //                    col1 : Sequelize.where(Sequelize.col("Flights.DepartureAirportId"),"=",Sequelize.col("airports.code"))
    //                 },
                   
    //             }
    //     ]

    //     });

    //     console.log( "response :=>" + response.toString());

    //     return response;

        
    // }





    // 5. after adding allias
    // async getAllFlights(filter,sort) {

    //     console.log("Filter in repository:", filter);
    //     const response = await Flights.findAll({
    //         where: filter,
    //         order : sort,
    //         include :[
    //             {
    //             model:airplanes,
    //             required : true,
    //             as:'airplanes_details'
    //             },


    //             {
    //                 model: airports,
    //                 required: true,
    //                 as:'departure_airport',
    //                 On: {
    //                    col1 : Sequelize.where(Sequelize.col("Flights.DepartureAirportId"),"=",Sequelize.col("departure_airport.code"))
    //                 },
                   
    //             },
            
                // adding arrival airportId details
    //             {
    //                 model: airports,
    //                 required: true,
    //                 as:'arrival_airport',
    //                 On: {
    //                    col1 : Sequelize.where(Sequelize.col("Flights.ArrivalAirportId"),"=",Sequelize.col("arrival_airport.code"))
    //                 },
                   
    //             },
    //     ]

    //     });

    //     console.log( "response :=>" + response.toString());

    //     return response;

        
    // }




    // 6. adding cities info too
    async getAllFlights(filter,sort) {

        console.log("Filter in repository:", filter);
        const response = await Flights.findAll({
            where: filter,
            order : sort,
            include :[
                {
                model:airplanes,
                required : true,
                as:'airplanes_details'
                },


                {
                    model: airports,
                    required: true,
                    as:'departure_airport',
                    On: {
                       col1 : Sequelize.where(Sequelize.col("Flights.DepartureAirportId"),"=",Sequelize.col("departure_airport.code"))
                    },

                    include : {
                        model:cities,
                        required : true
                    }
                   
                },
            
                // adding arrival airportId details
                {
                    model: airports,
                    required: true,
                    as:'arrival_airport',
                    On: {
                       col1 : Sequelize.where(Sequelize.col("Flights.ArrivalAirportId"),"=",Sequelize.col("arrival_airport.code"))
                    },
                    include : {
                        model:cities,
                        required : true
                    }
                   
                },
        ]

        });
        console.log( "response :=>" + response.toString());

            return response;
    
            
        }

    


// a discussion

// with above inheritence , all things have been came 
// from parent class, i.e, from crudRepository

// we can write our custom operation function to 
// perform some function on DB.



async updateFlightSeats(flightId,seats,dec = true)
{
    // console.log("njnjj")
    const flight = await Flights.findByPk(flightId);
    // console.log("flight : " + flight.BoardingGate)

    // console.log("parsing value => " + parseInt(dec))

    
    if(parseInt(dec))
    {
        console.log("inside try")
        const response =   await flight.decrement('TotalSeats',{by:seats})
        return response
      
    }
    else{
        console.log("inside catch")
        const response =  await flight.increment('TotalSeats',{by:seats})
          return response

    }

    // return flight
}

}
module.exports = FlightRepository
  
    


    
