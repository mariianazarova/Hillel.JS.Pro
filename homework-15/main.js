window.addEventListener('DOMContentLoaded', () => {
    const inputCity = document.querySelector('.city-input');
    const resultWeather = document.querySelector('.result-weather');
    const API_KEY = 'bJO51oGLQmzeNrcEjMXl8NNsAcA0QSXs';
    const wrapper = document.getElementById('wrapper');
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
        if (inputCity.value === '') {
            resultWeather.innerHTML = `Oops, please enter city.`;
        } else {
            let cityExist = false;
            for (let city in dataCity) {
                if (inputCity.value === city) {
                    xhttp.open('GET', `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${dataCity[city]}?apikey=${API_KEY}`);
                    cityExist = true;
                }
            }
            if (cityExist === true) {
                xhttp.send();
                xhttp.onload = function () {
                    if (this.status === 200) {
                        const result = JSON.parse(this.response);
                        const weather = result.DailyForecasts;
                        for (let item in weather) {
                            const data = document.createElement("p");
                            data.innerHTML = new Date(weather[item].Date).toDateString();
                            wrapper.append(data);

                            const day = document.createElement("li");
                            day.innerHTML = `Day: ${weather[item].Day.IconPhrase}.`;
                            wrapper.append(day);

                            const night = document.createElement("li");
                            if (weather[item].Night.HasPrecipitation === false) {
                                night.innerHTML = `Night: ${weather[item].Night.IconPhrase}`;
                            } else {
                                night.innerHTML = `Night: ${weather[item].Night.IconPhrase}. ${weather[item].Night.PrecipitationIntensity} ${weather[item].Night.PrecipitationType}.`;
                            }
                            wrapper.append(night);

                            const temperatureMin = document.createElement("li");
                            temperatureMin.innerHTML = `Temperature min: ${(((+weather[item].Temperature.Minimum.Value)-32)*5/9).toFixed(1)}°C`;
                            wrapper.append(temperatureMin);
                            const temperatureMax = document.createElement("li");
                            temperatureMax.innerHTML = `Temperature max: ${(((+weather[item].Temperature.Maximum.Value)-32)*5/9).toFixed(1)}°C`;
                            wrapper.append(temperatureMax);
                            const line = document.createElement("hr");
                            wrapper.append(line);
                            inputCity.value = "";
                        }
                    } else {
                        resultWeather.innerHTML = `Somthing is wrong`;
                    }
                }
            } else {
                resultWeather.innerHTML = `Sorry, we cannot show the weather of your city.`;
                inputCity.value = "";
            }
        }

    })
})