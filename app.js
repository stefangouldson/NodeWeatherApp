const {getWeather} = require('./weather')
const {getLocation}= require('./location')

const main= async (place) =>{
    const location = await getLocation(place);
    const weather  = await getWeather(location);
    const temp= Math.round(((weather.temperature)-32)*(5/9));
    const rain=weather.precipProbability*100

    return {
        place: location.name,
        temp:temp,
        summary:weather.summary,
        rain:rain,
    }
}

main(process.argv[2])

module.exports={
    main
}