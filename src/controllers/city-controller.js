const {StatusCodes} = require('http-status-codes');
const {CityService} = require('../services');
const{ErrorResponse,SuccessResponse} = require('../utils/common')

async function createCity(req,res) {
    // POST /cities
    // req.body : {name : 'London'}
    try{
        console.log("req body => " + req.body.name)
    
        const city = await CityService.createCity({
            name : req.body.name
        });
    
        SuccessResponse.data = city;
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


// get all cities
async function getCities(req,res){
    try{
        
        const cities = await CityService.getCities();
        SuccessResponse.data = cities;

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


// get only one airplane
async function getCity(req,res){
    try{

        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = city;

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




// destroy a perticular airplane
async function destroyCity(req,res){
    try{

        const city = await CityService.DestroyCity(req.params.id);
        SuccessResponse.data = city;

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


async function updateCity(req,res){
    try{
        console.log("aa gye")

        const city = await CityService.UpdateCity(req.params.id,{
            name : req.body.name,
        });
        SuccessResponse.data = city;
        console.log(SuccessResponse)

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


module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
}