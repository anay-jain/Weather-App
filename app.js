var request = require('request')

// var url='https://api.darksky.net/forecast/2595a3bc6ffbebe5243f1bd33a02a983/28.7383,77.0822'

// request({url:url , json:true}, (error, response) => {
//     if(error){
//         console.log("unable to connect to weather service")
//     }
//     else if(response.body.error){
//         console.log('unable to find location')
//     }
//     else
//     {console.log(response.body.daily[0].summary)}
// })

// var geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiYW5heS1qYWluIiwiYSI6ImNqeTB6dzZ0NDA3eXYzb3Bjd25pcmo0eW4ifQ.X9zI13hZFIrTl84wqu2xGA'
// request({url:geoUrl, json:true} , (error,response) => {
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
// })


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=1&access_token=pk.eyJ1IjoiYW5heS1qYWluIiwiYSI6ImNqeTB6dzZ0NDA3eXYzb3Bjd25pcmo0eW4ifQ.X9zI13hZFIrTl84wqu2xGA'
    request({url:url , json:true} , (error , response) => {
        if(error){
            console.log("Please check your internet connection")}
    
        else{
            const cordinates = {
                latitude: response.body.features[0].center[0],
                longitude : response.body.features[0].center[1]
            }
            callback(cordinates)
        }  
       
    })

}
const getCoordinates = geocode('china' , (coordinates)=>{
    console.log(coordinates)
})