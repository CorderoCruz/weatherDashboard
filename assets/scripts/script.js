const searchBtn = document.querySelector(".searchBtn");

const getData = function () {
    const cityNameInput = document.querySelector(".search_city_input").value;
    this.cityURL =
        cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameInput}&appid=51cc602a695be172598f1b878becb16e`;

    fetch(cityURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let latLong = {
                    latitude: data[i].lat,
                    longitude: data[i].lon,
                };
                document.querySelector(".city_name").textContent =
                    data[i].local_names.en + ", " + data[i].state;
                //eliminating the latitude and longitude to only have two numbers after the decimal
                let latitude = Math.round(latLong.latitude * 100) / 100;
                let longitude = Math.round(latLong.longitude * 100) / 100;
                function convertData() {
                    let cityLatLongUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=51cc602a695be172598f1b878becb16e`;
                    fetch(cityLatLongUrl)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data);
                            //current tempature queryselectors
                            let currentWind = document.querySelector(
                                ".current_wind_insert"
                            );
                            let currentTemp = document.querySelector(
                                ".current_tempature_insert"
                            );
                            let currentHum = document.querySelector(
                                ".current_humidity_insert"
                            );
                            let currentUV = document.querySelector(
                                ".current_UV_index_insert"
                            );
                            let weatherImg =
                                document.querySelector(".weather_symbol");
                            weatherImg.textContent = data.current.weather.icon;
                            currentTemp.textContent = `${data.current.temp} \u2109`;
                            //current wind speed by miles per hour
                            currentWind.textContent = `${data.current.wind_speed} mph`;
                            //current humidity index
                            currentHum.textContent = `${data.current.humidity} %`;
                            //current UV index
                            currentUV.textContent = `${data.current.uvi}`;

                            //------------------LOGG FOR DAY 1 CARD -------------------
                            //log day one tempature
                            let dayOneTemp = document.querySelector(
                                ".forecast_one_temp_insert"
                            );
                            dayOneTemp = Math.floor(dayOneTemp);
                            dayOneTemp.textContent = `${data.daily[0].temp.day} \u2109`;
                            //log day one wind
                            let dayOneWind = document.querySelector(
                                ".forecast_one_wind_insert"
                            );
                            dayOneWind.textContent = `${data.daily[0].wind_speed} mph`;
                            //log day one humidy
                            let dayOneHum = document.querySelector(
                                ".forecast_one_humidity_insert"
                            );
                            dayOneHum.textContent = `${data.daily[0].humidity} %`;

                            //----------------LOGS FOR DAY TWO --------------------------
                            let dayTwoTemp = document.querySelector(
                                ".forecast_two_temp_insert"
                            );
                            dayTwoTemp.textContent = `${data.daily[1].temp.day} \u2109`;
                            //log day one wind
                            let dayTwoWind = document.querySelector(
                                ".forecast_two_wind_insert"
                            );
                            dayTwoWind.textContent = `${data.daily[1].wind_speed} mph`;
                            //log day one humidy
                            let dayTwoHum = document.querySelector(
                                ".forecast_two_humidity_insert"
                            );
                            dayTwoHum.textContent = `${data.daily[1].humidity} %`;
                            //-------------LOGS FOR DAY THREE ----------------------------
                            let dayThreeTemp = document.querySelector(
                                ".forecast_three_temp_insert"
                            );
                            dayThreeTemp.textContent = `${data.daily[2].temp.day} \u2109`;
                            //log day one wind
                            let dayThreeWind = document.querySelector(
                                ".forecast_three_wind_insert"
                            );
                            dayThreeWind.textContent = `${data.daily[2].wind_speed} mph`;
                            //log day one humidy
                            let dayThreeHum = document.querySelector(
                                ".forecast_three_humidity_insert"
                            );
                            dayThreeHum.textContent = `${data.daily[2].humidity} %`;
                            //---------------LOGS FOR DAY FOUR ---------------------------
                            let dayFourTemp = document.querySelector(
                                ".forecast_four_temp_insert"
                            );
                            dayFourTemp.textContent = `${data.daily[1].temp.day} \u2109`;
                            //log day one wind
                            let dayFourWind = document.querySelector(
                                ".forecast_four_wind_insert"
                            );
                            dayFourWind.textContent = `${data.daily[1].wind_speed} mph`;
                            //log day one humidy
                            let dayFourHum = document.querySelector(
                                ".forecast_four_humidity_insert"
                            );
                            dayFourHum.textContent = `${data.daily[1].humidity} %`;
                            //----------------LOGS FOR DAY FIVE ----------------------------
                            let dayFiveTemp = document.querySelector(
                                ".forecast_five_temp_insert"
                            );
                            dayFiveTemp.textContent = `${data.daily[1].temp.day} \u2109`;
                            //log day one wind
                            let dayFiveWind = document.querySelector(
                                ".forecast_five_wind_insert"
                            );
                            dayFiveWind.textContent = `${data.daily[1].wind_speed} mph`;
                            //log day one humidy
                            let dayFiveHum = document.querySelector(
                                ".forecast_five_humidity_insert"
                            );
                            dayFiveHum.textContent = `${data.daily[1].humidity} %`;
                        });
                }
                convertData();
            }
        });
};

searchBtn.addEventListener("click", getData);
