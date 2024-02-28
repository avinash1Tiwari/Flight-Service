const express = require('express')

const {FlightMiddlewares} = require('../../middlewares')

const { FlightController} = require('../../controllers')

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




module.exports = router;
