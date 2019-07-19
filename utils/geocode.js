var request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=1&access_token=pk.eyJ1IjoiYW5heS1qYWluIiwiYSI6ImNqeTB6dzZ0NDA3eXYzb3Bjd25pcmo0eW4ifQ.X9zI13hZFIrTl84wqu2xGA'
    // hre url is url = url . we have used callback function
    request({url , json:true} , (error , {body}) => {
        if(error){
           callback("Please check your internet connection" , undefined);}
        else if(body.features.length===0){
            callback("No result found on this query" , undefined)
        }  
        else{
            callback(undefined, {
                // we have used object destructuring in this
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            } )
        }
    })

}

module.exports= geocode;