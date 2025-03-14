import translator from "./translator.js"

const transformWindDirection = (windDir) =>
{
    const windTable = [
        {dir:"N",text:"Północny"},
        {dir:"NNE",text:"Północno-Wschodni"},
        {dir:"NE",text:"Północno-Wschodni"},
        {dir:"ENE",text:"Północno-Wschodni"},
        {dir:"E",text:"Wschodni"},
        {dir:"ESE",text:"Południowo-Wschodni"},
        {dir:"SE",text:"Południowo-Wschodni"},
        {dir:"SSE",text:"Południowo-Wschodni"},
        {dir:"S",text:"Południowy"},
        {dir:"SSW",text:"Południowo-Zachodni"},
        {dir:"SW",text:"Południowo-Zachodni"},
        {dir:"WSW",text:"Południowo-Zachodni"},
        {dir:"W",text:"Zachodni"},
        {dir:"WNW",text:"Północno-Zachodni"},
        {dir:"NW",text:"Północno-Zachodni"},
        {dir:"NNW",text:"Północno-Zachodni"},
    ]

    for(const key of windTable)
    {
        if(key.dir == windDir)
        {
            return key.text
        }
    }
}

const replaceDotToComa = (val)=>
{
    val = String(val).replace(".",",")
    return [val]
}

async function transformData(data)
{
    const newData = {}

    newData.temperature = replaceDotToComa(data.current.temp_c)
    newData.feelsLike = replaceDotToComa(data.current.feelslike_c)
    newData.cloud = data.current.cloud
    newData.rain = replaceDotToComa(data.current.precip_mm)
    newData.humidity = data.current.humidity
    newData.pressure = data.current.pressure_mb
    newData.windSpeed = replaceDotToComa(data.current.wind_kph)
    newData.icon = data.current.condition.icon
    newData.condition = data.current.condition.text
    const date = new Date(+`${data.location.localtime_epoch}000`)
    newData.localDate = date.toLocaleDateString('pl')
    newData.localTime = date.toLocaleTimeString('pl',{hour:"2-digit",minute:"2-digit"})
    
    const lastUpdateDate = new Date(+`${data.current.last_updated_epoch}000`)

    newData.lastUpdate = lastUpdateDate.toLocaleString('pl',{timeStyle:"short",dateStyle:"short"}).split(', ').reverse().join(' ')

    newData.windDirection = transformWindDirection(data.current.wind_dir)

    try
    {
        newData.name = await translator(data.location.name,"pl")
    }
    catch(ex)
    {
        newData.name = data.location.name
    }
    try
    {
        newData.country = await translator(data.location.country,"pl")
    }
    catch(ex)
    {
        newData.country = data.location.country
    }

    try
    {
        newData.timeZone = await translator(data.location.tz_id,"pl")
    }
    catch(ex)
    {
        newData.timeZone = data.location.tz_id
    }


    return newData
}

export default transformData