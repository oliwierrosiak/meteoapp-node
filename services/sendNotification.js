import '../services-account.json' assert { type: 'json' };
import { Expo } from 'expo-server-sdk'

const expo = new Expo();


async function sendNotification(weatherInfo,expoToken)
{
  console.log(expoToken)
  let messages = [];
  messages.push({
    to: expoToken,
    sound: 'default',
    title: 'Tytuł powiadomienia',
    body: 'Treść powiadomienia',
  });
    
  try {
    const response = await expo.sendPushNotificationsAsync(messages);
    console.log('Push notification sent successfully:', response);
  } catch (error) {
    console.error('Error sending push notification:', error);
  }

}

export default sendNotification