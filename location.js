const request= require('request')
const {promisify} = require('util')
const promisifiedRequest = promisify(request)
const {token} = require("./keys")

const getLocation = async (place) =>{
    try{
        let data = await promisifiedRequest(
            {url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${token}`, 
            json:true})
            return({
                name: data.body.features[0].place_name,
                lng: data.body.features[0].center[1],
                lat: data.body.features[0].center[0]
            })
 } catch (error){
     console.log("oops")
 }
}

module.exports={
    getLocation
}