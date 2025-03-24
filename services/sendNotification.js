import '../services-account.json' assert { type: 'json' };
import { Expo } from 'expo-server-sdk'

const expo = new Expo();


async function sendNotification(weatherInfo,expoToken)
{
  let messages = [];
  messages.push({
    to: expoToken,
    sound: 'default',
    title: `Nowa pogoda - ${weatherInfo.name}`,
    body: `${weatherInfo.condition}, ${weatherInfo.temperature}°C, kliknij aby otworzyc aplikację!`,
  });
    
  try
  {
    const response = await expo.sendPushNotificationsAsync(messages);
  }
  catch(ex)
  {
    console.log(ex)
  }

}

export default sendNotification