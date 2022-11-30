window.addEventListener('DOMContentLoaded', () => {
    const inputCity = document.querySelector('.city-input');
    const weatherWrapper = document.getElementById('weather-wrapper');
    const API_KEY = 'bJO51oGLQmzeNrcEjMXl8NNsAcA0QSXs';
    const dataCity = {
        Lviv: 324561,
        Kyiv: 324505,
        Kharkiv: 323903,
        Chernihiv: 322162,
        Odesa: 325343,
        Mariupol: 323037,
        Poltava: 325523,
        Zhytomyr: 326609,
        Cherkasy: 321985,
        London: 328328,
        Warsaw: 274663,
        NewYork: 349727,
    };
    const xhttp = new XMLHttpRequest();
    document.querySelector('.weather-submit').addEventListener('click', (event) => {
        event.preventDefault();
        weatherWrapper.innerHTML = "";

        if (!inputCity.value) {
            weatherWrapper.innerHTML = "Oops, please enter city.";
        } else {
            let cityExist = false;
            for (let city in dataCity) {
                if (inputCity.value.toLowerCase() === city.toLowerCase()) {
                    xhttp.open('GET', `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${dataCity[city]}?apikey=${API_KEY}`);
                    cityExist = true;
                }
            }
            if (cityExist) {
                xhttp.send();
                weatherWrapper.innerHTML = "Loading...";
                xhttp.onload = function () {
                    if (this.status === 200) {
                        const result = JSON.parse(this.response);
                        const weather = result.DailyForecasts;

                        weatherWrapper.innerHTML = "";

                        for (let item in weather) {
                            const forecastItem = document.createElement("div");
                            forecastItem.classList.add("forecast-item");
                            const data = document.createElement("p");
                            data.innerHTML = new Date(weather[item].Date).toDateString();

                            const day = document.createElement("li");
                            day.innerHTML = `Day: ${weather[item].Day.IconPhrase}.`;

                            const night = document.createElement("li");
                            if (!weather[item].Night.HasPrecipitation) {
                                night.innerHTML = `Night: ${weather[item].Night.IconPhrase}`;
                            } else {
                                night.innerHTML = `Night: ${weather[item].Night.IconPhrase}. ${weather[item].Night.PrecipitationIntensity} ${weather[item].Night.PrecipitationType}.`;
                            }

                            const temperatureMin = document.createElement("li");
                            temperatureMin.innerHTML = `Temperature min: ${(((+weather[item].Temperature.Minimum.Value)-32)*5/9).toFixed(1)}°C`;

                            const temperatureMax = document.createElement("li");
                            temperatureMax.innerHTML = `Temperature max: ${(((+weather[item].Temperature.Maximum.Value)-32)*5/9).toFixed(1)}°C`;

                            const line = document.createElement("hr");


                            forecastItem.append(data);
                            forecastItem.append(day);
                            forecastItem.append(night);
                            forecastItem.append(temperatureMin);
                            forecastItem.append(temperatureMax);
                            forecastItem.append(line);

                            weatherWrapper.append(forecastItem);
                            inputCity.value = "";
                        }
                    } else {
                        weatherWrapper.innerHTML = "Something went wrong";
                    }
                }
            } else {
                weatherWrapper.innerHTML = "Sorry, we cannot show the weather of your city.";
                inputCity.value = "";
            }
        }
    })
})