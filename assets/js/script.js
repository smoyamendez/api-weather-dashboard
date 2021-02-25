// Global Variables
var cityBtn = document.querySelector('#cityBtn');
var cityInput = document.querySelector('#cityInput');
var curCityName = document.querySelector('#curCityName');
var curTemp = document.querySelector('#curTemp');
var curHumidity = document.querySelector("#curHumidity");
var curUVIndex = document.querySelector("#curUVIndex");
var dayOne = document.querySelector("#dayOne");
var dayTwo = document.querySelector("#dayTwo");
var dayThree = document.querySelector("#dayThree");
var dayFour = document.querySelector("#dayFour");
var dayFive = document.querySelector("#curWindSpeed");

var iconEl = document.querySelector("#icon");
var unit = 'imperial'

// Function for grabbing UV Index from API

function getUv(lat, lon) {
    fetch('http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14' + '&units=')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data)
            curUVIndex.textContent = 'UV Index: ' + data.value;
        })
}

// Function for grabbing 5 Day Forecast

function getFiveDay () {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput.value + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14' + '&units=' + unit)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            var time = data.list[0].dt_txt.slice(11);
            // var date = data.list[i].dt_txt.slice(0, 9);
            var array = [];
            console.log(time);
        //     for (var i = 0; i < 40; i++) {
        //         if (time.includes('12:00:00')) {
                    
                    
        // }
        
        
        
        })

}



// Function for grabbing Current Weather

function getCurrent () {
    
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
}

// When Submit Button is clicked

cityBtn.addEventListener('click', function (event) {
    event.preventDefault();
    getCurrent();
    // getFiveDay();
})
    // var fiveDay = [];
    // for (var i = 0; i < 40; i++) {
        //     if(data.list[i].dt_txt === moment().hour(12).minute(0).second(0).add(d, 'd').format('YYYY-MM-DD HH:mm:ss')) {
            //         for (var d =)
            //     }
            
            //     }
            // console.log(data);
            
            // var j = 1;
            // for (i = 0; i < 40; i++) {
            //     if (data.list[i].dt_txt === moment().hour(12).minute(0).second(0).add(j, 'd').format('YYYY-MM-DD HH:mm:ss')) {
        
            //         j++;
//                 }
//     console.log(array);
// }