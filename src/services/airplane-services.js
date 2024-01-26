const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')

const airplanerepository = new AirplaneRepository();


async function createAirplaneA(data) {

    try{

        console.log("inside service")

        const airplane = await airplanerepository.create(data);
        return airplane; 
       
    }
    catch(error)
    {
        // console.log("error ka naam " + error.name)
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

            throw new AppError('cannot create a new Airplane object ',StatusCodes.INTERNAL_SERVER_ERROR);




        
        
    }

}



async function getAirplanes(){
    try{

        const airplanes = await airplanerepository.getAll();
        return airplanes;
    }
    catch(error){

        throw new AppError("Can not fetch the data of all airplanes ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAirplane(id){
    try{

        const airplanes = await airplanerepository.get(id);
        return airplanes;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError("The airplane you have requested is not present",error.statusCode)
        }
        throw new AppError("Can not fetch the data of all airplanes ",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}



module.exports ={
    createAirplaneA,
    getAirplanes,
    getAirplane
}