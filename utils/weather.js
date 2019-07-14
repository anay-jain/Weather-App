var request = require('request')

const weather = (longitude , latitude , callback ) => {
    var url ='https://api.darksky.net/forecast/2595a3bc6ffbebe5243f1bd33a02a983/'+ encodeURIComponent(longitude) +','+ encodeURIComponent(latitude)

request({url:url , json:true} , (error, response)=>{
    if(error){
        callback("Please log into Internet " , undefined)
    }
    else{
        callback(error, {
            data : response.body.daily.data[0].summary +" and the temp is  " +  response.body.currently.temperature
    })
    }

})
}
module.exports = weather