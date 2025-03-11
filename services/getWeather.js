import axios from "axios"

const apiKey = `7d658a61f5cf4e228d6191708240909`

export const getWeather = async(place) =>
{
    try
    {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&lang=pl`)
        return response.data
    }
    catch(ex)
    {
        return ex
    }
}