import { getWeather } from "../services/getWeather.js"
import sendNotification from "../services/sendNotification.js"

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
        const weatherInfo = await getWeather(req.query.place)
        sendNotification(weatherInfo,req.body.notificationToken)
    }
}

export default new ApiControllers
