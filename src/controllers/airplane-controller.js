// const {StatusCodes} = require('http-status-codes');

// const {AirplaneServices} = require('../services');






// async function createAirplane(req,res) {



//         try{
//             console.log("inside controller")
//             console.log(req.body)

//             // const airplane = req.body.modelNumber + req.body.capacity;
//             const airplane = await AirplaneServices.createAirplaneA({
//                 modelNumber : req.body.modelNumber,
//                 capacity : req.body.capacity
//             });
        

//             return res
//                     .status(StatusCodes.CREATED)
//                     .json({
//                         success : true,
//                         messsage : "successfully created an airplane",
//                         data : airplane,
//                         error : {}
//                     });
                     

//         }
//         catch(error)
//         {
//             return res
//             .status(StatusCodes.INTERNAL_SERVER_ERROR)
//             .json({
//                 success : false,
//                 messsage : "something went wrong while  creating an airplane",
//                 data : {},
//                 error : error
//             });

//         }
   
// }

// module.exports = {
//     createAirplane,
// }









// after util folder

// const {StatusCodes} = require('http-status-codes');

// const {AirplaneServices} = require('../services');

// const{ErrorResponse,SuccessResponse} = require('../utils/common')


// async function createAirplane(req,res) {



//         try{
            

//             // const airplane = req.body.modelNumber + req.body.capacity;
//             const airplane = await AirplaneServices.createAirplaneA({
//                 modelNumber : req.body.modelNumber,
//                 capacity : req.body.capacity
//             });
        
//             SuccessResponse.data = airplane;
//             return res
//                     .status(StatusCodes.CREATED)
//                     .json(SuccessResponse);
                     

//         }
//         catch(error)
//         {

//             ErrorResponse.error = error;


//             return res
//             .status(StatusCodes.INTERNAL_SERVER_ERROR)
//             .json(ErrorResponse);

//         }
   
// }

// module.exports = {
//     createAirplane,
// }












// after error-app in util/error

const {StatusCodes} = require('http-status-codes');

const {AirplaneServices} = require('../services');

const{ErrorResponse,SuccessResponse} = require('../utils/common')




async function createAirplane(req,res) {

            // POST : /airplane
            // req.body : modelNumber : "airbus233" , capacity : 400


        try{
            // const airplane = req.body.modelNumber + req.body.capacity;
            const airplane = await AirplaneServices.createAirplaneA({
                modelNumber : req.body.modelNumber,
                capacity : req.body.capacity
            });
        
            SuccessResponse.data = airplane;
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




// get all airplanes
async function getAirplanes(req,res){
    try{

        const airplanes = await AirplaneServices.getAirplanes();
        SuccessResponse.data = airplanes;

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
async function getAirplane(req,res){
    try{

        const airplane = await AirplaneServices.getAirplane(req.params.id);
        SuccessResponse.data = airplane;

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
async function destroyAirplane(req,res){
    try{

        const airplane = await AirplaneServices.DestroyAirplane(req.params.id);
        SuccessResponse.data = airplane;

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


async function updateAirplane(req,res){
    try{
        console.log("aa gye")

        const airplane = await AirplaneServices.UpdateAirplane(req.params.id,{
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane;

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
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}