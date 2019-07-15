const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

address = process.argv[2];
if(!address){
    console.log("Please enter address after your js file name")
}
else{
    geocode(address , (error,{latitude ,longitude,location})=>{
        if(error){
            console.log(error)
       }
        else
         {
             weather(latitude,longitude,(error , forecastdata) => {
             console.log("Location :  " , location)
             console.log("Results : " , forecastdata)
             })
         }
     })
}

 