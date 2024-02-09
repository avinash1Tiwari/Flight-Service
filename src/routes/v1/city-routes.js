const express = require('express')
const { CityController} = require('../../controllers')
const { CityMiddleware } = require('../../middlewares')


const router = express.Router();


//   /api/v1/cities   POST
// req body = {name : 'varanasi'}
router.post('/',
                CityMiddleware.validateCreateRequest, 
                CityController.createCity);



//   /api/v1/cities   GET
// req body = {}
router.get('/',CityController.getCities)



//   /api/v1/cities/id   GET
// req body = {}
router.get('/:id',CityController.getCity)

//   /api/v1/cities/id   DELETE
// req body = {}
router.delete('/:id',CityController.destroyCity)

//  /api/v1/cities/id   PATCH
// req body =  req body = {name : mirzapur}

router.patch('/:id',CityController.updateCity)


module.exports = router;