const { StatusCodes } = require('http-status-codes');
const  {FlightRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')
// const {Flights} = require('../models')

const {Op}  = require('sequelize');
const { response } = require('express');

const flighttrepository = new FlightRepository();


async function createFlight(data) {

    try{

        console.log("inside Service  datA : " + data)
        

            const flight = await flighttrepository.create(data);
            return flight; 
        
       
    }
    catch(error)
    {
        console.log("error ka naam :" + error.name)
        // if(error.name == 'TypeError')
        // {
            // console.log("nkkkkk")
        //     throw new AppError('cannot create a new Airplane object ',StatusCodes.INTERNAL_SERVER_ERROR);

        // }
        // throw error;





        if(error.name == 'SequelizeValidationError')
        {
            let explaination = [];
            // console.log(error)

            error.errors.forEach((err) => {
                explaination.push(err.message);
                
            });

            // console.log(explaination)
            // throw new AppError('cannot create a new Airplane object ',StatusCodes.INTERNAL_SERVER_ERROR);

            throw new AppError(explaination,StatusCodes.BAD_REQUEST);

        }

            throw new AppError('cannot create a new Flight object ',StatusCodes.INTERNAL_SERVER_ERROR);




        
        
    }

}




async function getAllFlights(query){
    
    let customFilter = {};
    // trips = MUB-DEL
    console.log("query :" + query.sort)
// console.log("rr : " + query.trips)
    if(query.trips){

        [DepartureAirportId,ArrivalAirportId] = query.trips.split("-");
        customFilter.DepartureAirportId = DepartureAirportId;
        customFilter.ArrivalAirportId = ArrivalAirportId;
    }

    //   req - body =>  api/v1/flights?trips="DEL-MUM"&price=100-200
// 2. price range filter
if(query.price){

    [minPrice,maxPrice] = query.price.split("-");
    
    customFilter.price = {
        [Op.between] : [minPrice,maxPrice]
    }
}

// 3 .adding traveller number filter

    if(query.traveller)
    {
        customFilter.TotalSeats = {
            [Op.gte] : query.traveller
        }
    }

// 4. adding perticular date flight filter
   
   if(query.tripDate){

    const endingTripTime = " 23:59:00";
    customFilter.DepartureTime = {
        // [Op.gte] : query.tripDate 
        [Op.between] :[ query.tripDate, query.tripDate + endingTripTime]
    }
   }


//  5.   apply sorting criteria
// req - body =>  api/v1/flights?trips="DEL-MUM"&price=100-200&sort=DepartureTime_ASC,price_DESC
    let sortFilter;

   if(query.sort){

    
    // console.log("dddd=>"+sortFilter)
    
    const params = query.sort.split(',');

    const sortFilters = params.map((param) => 
        param.split('_')
    );
    
    // console.log("sortFilter :=> "+sortFilters);

    sortFilter = sortFilters;
    console.log("sortFilter :=> "+sortFilter)
    
   }




    try{

    //   1.   before applying sort filter

        // console.log("Before calling getAllFlights");
        const flight = await flighttrepository.getAllFlights(customFilter,sortFilter)
        return flight;





    // after apply sort filter
      // console.log("Before calling getAllFlights");
        // const flight = await flighttrepository.getAllFlights(customFilter,sortFilter)
        // return flight;

    }
    catch(error){

        console.log("error ka naam =>:" + error)
        if(error.name == 'SequelizeValidationError')
        {
            let explaination = [];
            // console.log(error)

            error.errors.forEach((err) => {
                explaination.push(err.message);
                
            });

            throw new AppError(explaination,StatusCodes.BAD_REQUEST);

        }

            throw new AppError('cannot find data for required Flights ',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}




async function getFlight(id){
    try{

        const flight = await flighttrepository.get(id);
        return flight;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The flight you have requested is not present",error.statusCode)
        }
        throw new AppError("Can not fetch the data of flight ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}


async function updateFlightSeats(data){
    console.log("a3hhhjj")
    console.log("inside services Data => " + data.flightId + " " + data.seats + " " + data.dec)
    try{

        const flight = await flighttrepository.updateFlightSeats(data.flightId,data.seats,data.dec);
        return flight;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The flight you have requested is not present",error.statusCode)
        }
        throw new AppError("Can not fetch the data of flight ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}




module.exports ={
    createFlight,
    getAllFlights,
    getFlight,
    updateFlightSeats
}
