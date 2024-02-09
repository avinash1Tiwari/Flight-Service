
const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');




function validateCreateRequest(req,res,next) {

    if(!req.body.name){
        // if you want to customize the response and error format do like below
        ErrorResponse.messsage = "something went wrong while  creating an airplane",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["City name not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    next();
}

module.exports = {validateCreateRequest};