import { getWeather } from "../services/getWeather.js"

class ApiControllers
{
    async get(req,res)
    {
        if(req.query.place)
        {
            const weatherInfo = await getWeather(req.query.place)
            res.json(weatherInfo)
        }
        else
        {
            res.sendStatus(400)
        }
    }

    async post(req,res)
    {
        console.log(req.query)
    }
}

export default new ApiControllers
