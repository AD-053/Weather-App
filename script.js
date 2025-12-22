const apiKey = "{Write Your Key}";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}&units=metric`);

    if(response.status === 404 || city ==""){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

        const actualWeather = data.weather[0].main;

        if(actualWeather === 'Clouds'){
            weatherIcon.src = "images/clouds.png";
        }
        else if(actualWeather === 'Clear'){
            weatherIcon.src = "images/clear.png";
        }
        else if(actualWeather === 'Rain'){
            weatherIcon.src = "images/rain.png";
        }
        else if(actualWeather === 'Drizzle'){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(actualWeather === 'Mist'){
            weatherIcon.src = "images/mist.png";
        }

        weatherCondition.innerHTML = `${actualWeather}`

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchBtn.addEventListener("click", ()=>{
    // console.log(searchBox.value);
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
