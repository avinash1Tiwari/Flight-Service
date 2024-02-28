const express = require('express')

const {AirportMiddlewares} = require('../../middlewares')

const { AirportController} = require('../../controllers')

const router = express.Router();

console.log("inside airplane Routes")



//   /api/v1/airports   POST
// req body = {name : 'IGI' , address : "abcd",code:'DEL',cityId:2}
router.post('/',
                AirportMiddlewares.validateCreateRequest,
                AirportController.createAirport);




//   /api/v1/airports   GET  , for accessing all the airports
// req body = {}
router.get('/',AirportController.getAirports)




//   /api/v1/airports/id   GET
// req body = {}
router.get('/:id',AirportController.getAirport)




//   /api/v1/airports/id   DELETE
// req body = {}
router.delete('/:id',AirportController.destroyAirport)

//  /api/v1/airports/id   PATCH
// req body =  req body = {name : 'IGI' , address : "abcd",code:'DEL',cityId:2}

router.patch('/:id',AirportController.updateAirport)

module.exports = router;