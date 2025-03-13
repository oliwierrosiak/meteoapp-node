import axios from "axios"
import transformData from "./transformData.js"
import transformSearchingPlace from "./transformSearchingPlace.js"

const apiKey = `7d658a61f5cf4e228d6191708240909`

export const getWeather = async(place) =>
{
    const transformedPlace = await transformSearchingPlace(place)
    try
    {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${transformedPlace}&lang=pl`)
        return transformData(response.data)
    }
    catch(ex)
    {
        return ex
    }
}