function displayTemperature(response){
    console.log(response.data.main.temp)
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let conditionElement=document.querySelector("#condition");
    let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind");

    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
   conditionElement.innerHTML=response.data.weather[0].description;
   humidityElement.innerHTML=response.data.main.humidity;
   windElement.innerHTML=Math.round(response.data.wind.speed);
   
}


let apiKey="f256af9198bc4036cf1455428925e38c";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(apiUrl). then(displayTemperature)