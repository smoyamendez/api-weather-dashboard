// Global Variables
var cityBtn = document.querySelector('#cityBtn');
var cityInput = document.querySelector('#cityInput');
var curCityName = document.querySelector('#curCityName');
var curTemp = document.querySelector('#curTemp');
var curHumidity = document.querySelector("#curHumidity");
var curUVIndex = document.querySelector("#curUVIndex");
var curWindSpeed = document.querySelector("#curWindSpeed");
var iconEl = document.querySelector("#icon");
var unit = 'imperial'


function getUv(lat, lon) {
    fetch('http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14' + '&units=')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data)
            curUVIndex.textContent = 'UV Index: '+ data.value;
        })
}

cityBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Current Weather
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14' + '&units=' + unit)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data)
            curCityName.textContent = data.name + " " + moment().format("M/D/YYYY");
            curTemp.textContent = 'Temperature: ' + parseInt(data.main.temp) + "°F";
            curHumidity.textContent = 'Humidity: ' + parseInt(data.main.temp) + '%';
            curWindSpeed.textContent = 'Wind Speed: ' + parseInt(data.wind.speed) + 'mph';
            getUv(data.coord.lat, data.coord.lon)
            
        })
   
    // 5 Day Forecast
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput.value + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14' + '&units=' + unit)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data)

        })
    
})