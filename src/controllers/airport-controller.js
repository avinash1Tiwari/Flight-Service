
const {StatusCodes} = require('http-status-codes');

const {AirportServices} = require('../services');

const{ErrorResponse,SuccessResponse} = require('../utils/common')



// create an airport
async function createAirport(req,res) {

            // POST : /airplane
            // req.body : modelNumber : "airbus233" , capacity : 400


        try{
            // const airplane = req.body.modelNumber + req.body.capacity;
            const airport = await AirportServices.createAirport({
                name : req.body.name,
                address : req.body.address,
                code : req.body.code,
                cityId : req.body.cityId
            });
        
            SuccessResponse.data = airport;
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




// get all airports
async function getAirports(req,res){
    try{

        const airports = await AirportServices.getAirports();
        SuccessResponse.data = airports;

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



// get only one airport
async function getAirport(req,res){
    try{

        const airport = await AirportServices.getAirport(req.params.id);
        SuccessResponse.data = airport;

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



// destroy a perticular airport
async function destroyAirport(req,res){
    try{

        const airport = await AirportServices.DestroyAirport(req.params.id);
        SuccessResponse.data = airport;

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

// update perticular airport
async function updateAirport(req,res){
    try{
        console.log("aa gye")

        const airport = await AirportServices.UpdateAirport(req.params.id,{
            name : req.body.name,
            address : req.body.address,
            code : req.body.code,
            cityId : req.body.cityId
        });
        SuccessResponse.data = airport;

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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}