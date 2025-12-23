// console.log("Hare Krishna");

const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}&units=metric`);

    if(response.status === 404 || city ==""){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".search-msg").style.display = "none";
    }

    else{
        var data = await response.json();

        console.log(Date.now().toString);

        const now = new Date();

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const weekday = weekdays[now.getDay()];
        const day = String(now.getDate()).padStart(2, '0');
        const month = months[now.getMonth()];

        const formatted = `${weekday}, ${day} ${month}`;

        document.querySelector(".place-txt").innerHTML = data.name;
        document.querySelector(".date-txt").innerHTML = formatted;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

        const actualWeather = data.weather[0].main;

        switch(actualWeather) {
            case 'Clouds':
                weatherIcon.src = "images/clouds.png";
                break;
            case 'Clear':
                weatherIcon.src = "images/clear.png";
                break;
            case 'Rain':
                weatherIcon.src = "images/rain.svg";
                break;
            case 'Drizzle':
                weatherIcon.src = "images/drizzle.svg";
                break;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
                weatherIcon.src = "images/mist.png";
                break;
            case 'Thunderstorm':
                weatherIcon.src = "images/thunderstorm.svg";
                break;
            case 'Snow':
                weatherIcon.src = "images/snow.png";
                break;
            default:
                weatherIcon.src = "images/clear.png";
        }

        weatherCondition.innerHTML = `${data.weather[0].description}`;

        await displayForecast(city);

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".search-msg").style.display = "none";
    }
}

async function displayForecast(city) {
    const response = await fetch(forecastUrl + `q=${city}&appid=${apiKey}&units=metric`);
    
    if(response.status === 200) {
        const forecastData = await response.json();
        
        const dailyForecasts = [];
        for(let i = 1; i < forecastData.list.length; i += 8) {
            if(dailyForecasts.length < 6) {
                dailyForecasts.push(forecastData.list[i]);
            }
        }
        
        const forecastContainer = document.querySelector(".forecast-items-container");
        forecastContainer.innerHTML = ""; 
        
        dailyForecasts.forEach( (day) => {
            const date = new Date(day.dt * 1000);
            const dayNum = String(date.getDate()).padStart(2, '0');
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const month = monthNames[date.getMonth()];
            
            const temp = Math.round(day.main.temp);
            const weather = day.weather[0].main;
            
            let iconSrc;
            switch(weather) {
                case 'Clouds':
                    iconSrc = "images/clouds.png";
                    break;
                case 'Clear':
                    iconSrc = "images/clear.png";
                    break;
                case 'Rain':
                    iconSrc = "images/rain.svg";
                    break;
                case 'Drizzle':
                    iconSrc = "images/drizzle.svg";
                    break;
                case 'Mist':
                case 'Smoke':
                case 'Haze':
                case 'Dust':
                case 'Fog':
                case 'Sand':
                case 'Ash':
                    iconSrc = "images/mist.png";
                    break;
                case 'Thunderstorm':
                    iconSrc = "images/thunderstorm.svg";
                    break;
                case 'Snow':
                    iconSrc = "images/snow.png";
                    break;
                default:
                    iconSrc = "images/clear.png";
            }
            
            const forecastItem = document.createElement('div');
            forecastItem.className = 'forecast-item';
            forecastItem.innerHTML = `
                <h3 class="forecast-item-date">${dayNum}, ${month}</h3>
                <img src="${iconSrc}" class="forecast-item-img" alt="${weather}">
                <h3 class="forecast-item-temp">${temp}°c</h3>
            `;
            
            forecastContainer.appendChild(forecastItem);
        });
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
