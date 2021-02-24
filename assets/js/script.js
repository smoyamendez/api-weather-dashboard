// Global Variables
var cityBtn = document.querySelector('#cityBtn');
var cityInput = document.querySelector('#cityInput');
var curCityName = document.querySelector('#curCityName');
var curTemp = document.querySelector('#curTemp');
var curHumidity = document.querySelector("#curHumidity");
var curUVIndex = document.querySelector("#curUVIndex");
var curWindSpeed = document.querySelector("#curWindSpeed");
var unit = 'imperial'

cityBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Current Weather
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14'+'&units='+ unit)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function (data) {
        console.log(data)
        //  TODO: pull data to page within .then statement
        curCityName.textContent = data.name; 
        curTemp.textContent ='Temperature: ' + parseInt(data.main.temp) + "°F"; 
        curHumidity.textContent = 'Humidity: ' + parseInt(data.main.temp) + '%'; 
        curWindSpeed.textContent = 'Wind Speed: ' + parseInt(data.wind.speed) + 'mph'; 
        
    })
    //  TODO: add an alert if input doesn't match any city or is ""
    
    var a=lat=data.coord.lat;
    var b=lon=data.coord.lon;
    // 5 Day Forecast
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput.value + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14'+'&units='+ unit)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function (data) {
        console.log(data)
        //  TODO: pull data to page within .then statement
    })
    //  TODO: add an alert if input doesn't match any city or is ""
    
    // UV Index
    fetch('http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14'+'&units=')
    .then(function (response) {
        if(response.ok) {
            return response.json();
            }
    })
     .then(function (data) {
         console.log(data)
        //  TODO: pull data to page within .then statement
        curUVIndex.textContent = data.name; 
     })
    //  TODO: add an alert if input doesn't match any city or is ""
})           