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
}

export default new ApiControllers
