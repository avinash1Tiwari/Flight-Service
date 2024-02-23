const { StatusCodes } = require('http-status-codes');
const { FlightRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')



const flighttrepository = new FlightRepository();


async function createFlight(data) {

    try{

        console.log("inside Service  datA : " + data)
        

            const flight = await flighttrepository.create(data);
            return flight; 
        
       
    }
    catch(error)
    {
        console.log("error ka naam :" + error.name)
        // if(error.name == 'TypeError')
        // {
        //     // console.log("nkkkkk")
        //     throw new AppError('cannot create a new Airplane object ',StatusCodes.INTERNAL_SERVER_ERROR);

        // }
        // throw error;





        if(error.name == 'SequelizeValidationError')
        {
            let explaination = [];
            // console.log(error)

            error.errors.forEach((err) => {
                explaination.push(err.message);
                
            });

            // console.log(explaination)
            // throw new AppError('cannot create a new Airplane object ',StatusCodes.INTERNAL_SERVER_ERROR);

            throw new AppError(explaination,StatusCodes.BAD_REQUEST);

        }

            throw new AppError('cannot create a new Flight object ',StatusCodes.INTERNAL_SERVER_ERROR);




        
        
    }

}

module.exports ={
    createFlight
}
