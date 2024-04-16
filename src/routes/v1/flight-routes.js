const express = require('express')

const {FlightMiddlewares} = require('../../middlewares')

const { FlightController} = require('../../controllers');
const { FlightRepository } = require('../../repositories');

const router = express.Router();

console.log("inside flight Routes")



//   /api/v1/flights   POST
// req body = 
// {FightNumber : 'IGI' , AirplaneId : "abcd",DepartureAirportId:'DEL',ArrivalAirportId:2
//  ArrivalTime : '2023-11-23 03:12:23',DepartureTime :'2023-11-23 06:12:23',Price:4300,
//  BoardingGate :'12A',TotalSeats:300
// }
router.post('/',
                    FlightMiddlewares.validateCreateRequest,
                    FlightController.createFlight);




//    /api/v1/flights?trips='DEL-VZG'   GET

// we write trips in "params" in postman
 router.get('/',FlightController.getAllFlights);


//   /api/v1/flights/id   GET
// req body = {}
router.get('/:id',FlightController.getFlight)




// update seat Api
//   /api/v1/flights/:id/seats  PATCH
// body = {dec = true, seats = 2}
// localhost:3000/api/v1/flights/10/seats
router.patch('/:id/seats',FlightMiddlewares.validateUpdateFlightSeat,
                        FlightController.updateFlightSeats)

module.exports = router;

