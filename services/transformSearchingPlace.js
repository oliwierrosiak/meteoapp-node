import translator from "./translator.js"

async function transformSearchingPlace(place)
{
    place = place.replace("ą","a").replace("ć","c").replace("ę","e").replace("ł","l").replace("ó","o").replace("ż","z").replace("ź","z").replace("ń","n").replace("ś","s")

    try
    {

        const newPlace = await translator(place,"en")
        return newPlace

    }
    catch(ex)
    {
        return place
    }
}

export default transformSearchingPlace