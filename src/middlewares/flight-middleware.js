
const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
// const compareTime = require('../utils/common/error-response')



function validateCreateRequest(req,res,next) {

    
   
    // const isValid = () => {
        // Use the function from the utils folder with the provided parameters
        
        // return str1
        // return compareTime(str1, str2);
    
    // }
    // console.log(isValid())
    // const isvalid = isValid()






    str1 = req.body.ArrivalTime
        str2 = req.body.DepartureTime

    
function compareTime(str1,str2)
{
    let dateTime1 = new Date(str1)
    let dateTime2 = new Date(str2)

    return dateTime1.getTime()<dateTime2.getTime();
}

let isValid = compareTime(str1,str2)

// console.log(compareTime(str1,str2))


    

    // let isValid = compareTime(str1,str2)
    // console.log("isVlid :"+ isvalid)

    if(!req.body.FightNumber){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["FightNumber not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    if(!req.body.AirplaneId){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["AirplaneId not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    if(!req.body.DepartureAirportId){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["DepartureAirportId not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    if(!req.body.ArrivalAirportId){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["ArrivalAirportId not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    if(!req.body.ArrivalTime){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["ArrivalTime not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    if(!req.body.DepartureTime){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["DepartureTime not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    if(!isValid)
    {
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["DepartureTime should be greater than ArrivalTime in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }



    if(!req.body.Price){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["Price not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }


    if(!req.body.BoardingGate){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["BoardingGate not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }


    if(!req.body.TotalSeats){
        // if you want to customize the response and error format do like below
        ErrorResponse.message = "something went wrong while  creating an flight",
        // ErrorResponse.error = {explaination : "modle not not found in the incomming request "}

        // ErrorResponse.error =  "modle not not found in the incomming request "

        ErrorResponse.error = new AppError(["TotalSeats not found in the incomming request "],StatusCodes.BAD_REQUEST)



        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
    }

    next();
}

module.exports = {validateCreateRequest};