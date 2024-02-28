const { StatusCodes } = require('http-status-codes');
const { AirportRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')

const airportrepository = new AirportRepository();


async function createAirport(data) {

    try{

        console.log("inside Service ")

        const airport = await airportrepository.create(data);
        return airport; 
       
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

            throw new AppError('cannot create a new Airport object ',StatusCodes.INTERNAL_SERVER_ERROR);




        
        
    }

}



async function getAirports(){
    try{

        const airports = await airportrepository.getAll();
        return airports;
    }
    catch(error){

        throw new AppError("Can not fetch the data of all airports ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAirport(id){
    try{

        const airport = await airportrepository.get(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The airport you have requested is not present",error.statusCode)
        }
        throw new AppError("Can not fetch the data of all airports ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}



async function DestroyAirport(id){
    try{

        const airports = await airportrepository.destroy(id);
        return airports;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The airport you want to delete is not present OR deleted already",error.statusCode)
        }
        throw new AppError("Can not fetch the data of all airports ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}


async function UpdateAirport(id,data){
    try{

        const airport = await airportrepository.update(id,data);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The airport you want to update is not present OR deleted already",error.statusCode)
        }
        throw new AppError("Can not update the data of  airport ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}


module.exports ={
    createAirport,
    getAirports,
    getAirport,
    DestroyAirport,
    UpdateAirport
}