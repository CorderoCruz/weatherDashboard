//Get value input

let searchBtn = document.querySelector(".searchBtn");

function getCityData() {
    cityName = document.querySelector(".search_city_input").value;
    let apiKey = `51cc602a695be172598f1b878becb16e`;

    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let cityName = document.querySelector(".city_name");
                cityName.textContent = data[i].name;
                console.log(cityName);
            }
        });
}

searchBtn.addEventListener("click", getCityData);
//Api call for the city based on the city name and not latitude and longitude

//search button corresponding to getting city data

//converting city name to long and lat

//log current date and the next five days

//logg tempature for crrent date and 5 future days

//logg Wind for crrent date and 5 future days

//logg humidity for crrent date and 5 future days

//logg UV index for crrent date and 5 future days
