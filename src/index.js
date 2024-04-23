const express = require('express');


const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

console.log("inside api Routes")
// parsing
app.use(express.json());
// read urlencoded char
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);


// taking request from API-Gateway, which acts as reverse-proxy
app.get('/flightServices',(req,res)=>{
    return res.json({msg : "what happened"})
})
// app.use('/flightServices/api', apiRoutes);



// Logger.info("succesfully started the server ",{})

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const {cities,airports} = require('./models')

    // bad code, implementing the request directly with the help of sequelize inbuilt functions

    // const city = await cities.findByPk(1);
    // console.log("city value => " + city.name)



    // const airport = await airports.create({name :'KolKata',code:'KLKT',cityId:1})
    // console.log(airport)



       

    // const varanasi = await cities.findByPk(2);
    // const airport1 = await varanasi.createAirport({name:"subhasChandra",code:"SCR"})
    // console.log("airport1 => "+ airport1)

    // const airport2 = await varanasi.createAirport({name:"Banaras-Airport",code:"BNS"})



    // await cities.destroy({
    //     where : {
    //         id:2
    //     }
    })






