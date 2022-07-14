//Get value input 
//Api call for the city based on the city name and not latitude and longitude

let searchBtn = document.querySelector('.searchBtn');


function citySearch () {
    let cityStateName = document.querySelector('.search_city_input').value;
    let APICallCity = `http://api.openweathermap.org/geo/1.0/direct?q=${cityStateName}&appid=51cc602a695be172598f1b878becb16e`;
    let ApiCallCityData = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.getLatitude}&lon=${this.getLongitude}&units=imperial&appid=51cc602a695be172598f1b878becb16e`
    
    
    fetch(APICallCity)
        .then( response => {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                let cityName = document.querySelector('.city_name')
                    cityName.textContent = data[i].local_names.en + ', ' + data[i].state;

                let cityLog = document.querySelector('.logged-cities')
                let pastCityName = document.createElement('button')
                    pastCityName.classList.add('past-searched-city')
                    pastCityName.textContent = data[i].local_names.en;
                    cityLog.appendChild(pastCityName);
                let currentDay = document.querySelector('.current_date');        
                let getLatitude = data[i].lat;
                    console.log(getLatitude)
                let getLongitude = data[i].lon
                    console.log(getLongitude)

                } 
    let ApiCallCityData = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.getLatitude}&lon=${this.getLongitude}&units=imperial&appid=51cc602a695be172598f1b878becb16e`
    fetch(ApiCallCityData)
    .then( response => {
        return response.json()
    })
    .then(function(weather) {
        console.log(weather);
        for(let i = 0; i < weather.length; i++) {
            let tempatureCurrentDay =  document.querySelector('.current_tempature_insert').textContent = weather[i].daily.temp.day;
                console.log(tempatureCurrentDay)
            }
        })
        
        }
        )

}
    //search button corresponding to getting city data
    searchBtn.addEventListener('click', citySearch)

//converting city name to long and lat



    //log current date and the next five days


//logg tempature for crrent date and 5 future days

//logg Wind for crrent date and 5 future days


//logg humidity for crrent date and 5 future days


//logg UV index for crrent date and 5 future days












