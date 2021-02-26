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
var dayFive = document.querySelector("#dayFive");
var dayOneDate = document.querySelector("#dayOneDate");
var dayTwoDate = document.querySelector("#dayTwoDate");
var dayThreeDate = document.querySelector("#dayThreeDate");
var dayFourDate = document.querySelector("#dayFourDate");
var dayFiveDate = document.querySelector("#dayFiveDate");
var dayOneTemp = document.querySelector("#dayOneTemp");
var dayTwoTemp = document.querySelector("#dayTwoTemp");
var dayThreeTemp = document.querySelector("#dayThreeTemp");
var dayFourTemp = document.querySelector("#dayFourTemp");
var dayFiveTemp = document.querySelector("#dayFiveTemp");
var dayOneHum = document.querySelector("#dayOneHum");
var dayTwoHum = document.querySelector("#dayTwoHum");
var dayThreeHum = document.querySelector("#dayThreeHum");
var dayFourHum = document.querySelector("#dayFourHum");
var dayFiveHum = document.querySelector("#dayFiveHum");
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

function getFiveDay() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput.value + '&appid=a93efe3c2ecf98f5aeb49553bbf46b14' + '&units=' + unit)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data)

            dayOneDate.textContent = moment().add(1, "d").format("M/D/YYYY");
            dayTwoDate.textContent = moment().add(2, "d").format("M/D/YYYY");
            dayThreeDate.textContent = moment().add(3, "d").format("M/D/YYYY");
            dayFourDate.textContent = moment().add(4, "d").format("M/D/YYYY");
            dayFiveDate.textContent = moment().add(5, "d").format("M/D/YYYY");
            dayOneTemp.textContent = "Temperature: " + data.list[2].main.temp + "°F";
            dayTwoTemp.textContent = "Temperature: " + data.list[10].main.temp + "°F";
            dayThreeTemp.textContent = "Temperature: " + data.list[18].main.temp + "°F";
            dayFourTemp.textContent = "Temperature: " + data.list[26].main.temp + "°F";
            dayFiveTemp.textContent = "Temperature: " + data.list[34].main.temp + "°F";
            dayOneHum.textContent = "Humidity: " + data.list[2].main.humidity + "%"; 
            dayTwoHum.textContent = "Humidity: " + data.list[10].main.humidity + "%";
            dayThreeHum.textContent = "Humidity: " + data.list[18].main.humidity + "%";
            dayFourHum.textContent = "Humidity: " + data.list[26].main.humidity + "%";
            dayFiveHum.textContent = "Humidity: " + data.list[34].main.humidity + "%";

        })
}

// Function for grabbing Current Weather

function getCurrent() {

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

var searchedCities = [];


// pushes searched cities to local storage
function lsCities() {
    localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
}
// pull searched cities from local storage
function getCities() {
    var storedCities = JSON.parse(localStorage.getItem('searchedCities'));
    if (storedCities) {
        searchedCities = storedCities;
    }
}



// When Submit Button is clicked

cityBtn.addEventListener('click', function (event) {
    event.preventDefault();
    getCurrent();
    getFiveDay();
    lsCities();
    getCities();
})




    // FIXME: trying to figure out a better way for 5 day
    //     var time = data.list[0].dt_txt.slice(11);
    //     // var date = data.list[i].dt_txt.slice(0, 9);
    //     var array = [];
    //     console.log(time);
    // //     for (var i = 0; i < 40; i++) {
    // //         if (time.includes('12:00:00')) {


    // // }


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