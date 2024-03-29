const {StatusCodes} = require('http-status-codes');
const {FlightServices} = require('../services');
const{ErrorResponse,SuccessResponse} = require('../utils/common')





async function createFlight(req,res) {
    //   /api/v1/flights   POST
   // req body = 
// {FightNumber : 'IGI' , AirplaneId : "abcd",DepartureAirportId:'DEL',ArrivalAirportId:2
//  ArrivalTime : '2023-11-23 03:12:23',DepartureTime :'2023-11-23 06:12:23',Price:4300,
//  BoardingGate :'12A',TotalSeats:300
// }
    try{
        console.log("req body => " + req.body.AirplaneId + " " + req.body.ArrivalAirportId + " " + req.body.ArrivalTime + " " + req.body.BoardingGate + " " + req.body.DepartureAirportId
         + " " + req.body.DepartureTime + " " 
        + req.body.Price + " " + req.body.BoardingGate + " " 
        + req.body.TotalSeats )

    
        const flight = await FlightServices.createFlight({
            FightNumber : req.body.FightNumber,
            AirplaneId : req.body.AirplaneId,
            DepartureAirportId : req.body.DepartureAirportId,
            ArrivalAirportId : req.body.ArrivalAirportId,
            ArrivalTime : req.body.ArrivalTime,
            DepartureTime : req.body.DepartureTime,
            Price : req.body.Price,
            BoardingGate : req.body.BoardingGate,
            TotalSeats : req.body.TotalSeats,
        });
    
        SuccessResponse.data = flight;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
                 

    }
    catch(error)
    {    
        console.log(error.statusCode)

        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);

    }

}

async function getAllFlights(req,res){
    
    try{
        
        const flight = await FlightServices.getAllFlights(req.query)
        
        SuccessResponse.data = flight;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);

    }
    catch(error){
        console.log(error.statusCode)

        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

// get only one airplane
async function getFlight(req,res){
    try{

        const flight = await FlightServices.getFlight(req.params.id);
        SuccessResponse.data = flight;

        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse)
    }
    catch(error){
        console.log(error.statusCode)

            ErrorResponse.error = error;
            return res
                    .status(error.statusCode)
                    .json(ErrorResponse);
    }
}


async function updateFlightSeats(req,res){
    console.log("controller bhai")
    console.log("request body =>" + req.params.id)
    try{

        
        const flight = await FlightServices.updateFlightSeats({
            flightId : req.params.id,
            seats:req.body.seats,
            dec : req.body.dec
        });
        console.log("controller bhai try")
        SuccessResponse.data = flight;

        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse)
    }
    catch(error){
        console.log("controller bhai catch")
        console.log(error.statusCode)

            ErrorResponse.error = error;
            return res
                    .status(error.statusCode)
                    .json(ErrorResponse);
    }
}


module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateFlightSeats
}