const express = require('express')

const {AirplaneMiddlewares} = require('../../middlewares')

const { AirplaneController} = require('../../controllers')

const router = express.Router();

console.log("inside airplane Routes")



//   /api/v1/airplanes   POST
// req body = {modelNumber : 'airbus234' , capacity : 300}
router.post('/',
                AirplaneMiddlewares.validateCreateRequest,
                AirplaneController.createAirplane);




//   /api/v1/airplanes   GET
// req body = {}
router.get('/',AirplaneController.getAirplanes)




//   /api/v1/airplanes/id   GET
// req body = {}
router.get('/:id',AirplaneController.getAirplane)




//   /api/v1/airplanes/id   DELETE
// req body = {}
router.delete('/:id',AirplaneController.destroyAirplane)

//  /api/v1/airplanes/id   PATCH
// req body =  req body = {modelNumber : 'airbus234' , capacity : 300}

router.patch('/:id',AirplaneController.updateAirplane)

module.exports = router;