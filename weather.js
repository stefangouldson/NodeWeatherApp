const request= require('request')
const {promisify} = require('util')

const promisifiedRequest = promisify(request)
const {apikey} = require('./keys')

const getWeather = async (locationData)=>{
    try{
    let data = await promisifiedRequest(
        {url:`https://api.darksky.net/forecast/${apikey}/${locationData.lng},${locationData.lat}`,
        json: true})
    return (data.body.currently)
} catch (error){
    console.log("oops theres been a problem")
}
}

module.exports={
    getWeather
}