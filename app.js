const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

address = process.argv[2];
if(!address){
    console.log("Please enter address after your js file name")
}
else{
    geocode(address , (error,data)=>{
        if(error){
            console.log(error)
       }
        else
         {
             weather(data.latitude,data.longitude,(error , forecastdata) => {
             console.log("Location :  " , data.location)
             console.log("Results : " , forecastdata)
             })
         }
     })
}

 