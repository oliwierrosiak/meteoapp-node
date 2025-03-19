async function sendNotification(weatherInfo,expoToken)
{
    const notification = {
        to: expoToken,
        sound: "default",
        title:"Nowe powiadomienie!",
        body:"To jest testowe powiadomienie push"
      };

    // console.log(weatherInfo)
    
    try
    {
        const response = await fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Accept-Encoding": "gzip, deflate",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(notification)
        });
    
        const data = await response.json();
        console.log(data)
    }
    catch(ex)
    {
        console.log(ex)
    }

}

export default sendNotification