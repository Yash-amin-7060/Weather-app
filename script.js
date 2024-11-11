const city = document.getElementById('city');
const getweather = (city) => {

    const API_KEY = '9d6ccfb698f97ad08d4ea1592ffd0de3';
    cityName.innerHTML = city;


    let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    p.then((response) => response.json())
     .then((response) => {
        console.log(response);
            document.getElementById("temperature").innerHTML = response.main.temp + "°C";
            document.getElementById("wind").innerHTML = response.wind.speed + " m/s";
            document.getElementById("humidity").innerHTML = response.main.humidity + "%";
            document.getElementById("temp_max").innerHTML = response.main.temp_max + "°C";
            document.getElementById("temp_min").innerHTML = response.main.temp_min + "°C";

        })
        .catch((error) => console.error("Error fetching data:", error));
}

const submit = document.getElementById("submit");
submit.addEventListener("click" , (e) =>{
    e.preventDefault();
    getweather(city.value)
})

const API_KEY = '9d6ccfb698f97ad08d4ea1592ffd0de3';

const cities = ['California', 'Virginia', 'Denver', 'Tokyo', 'Kyoto', 'Shibuya'];

function updateCityWeather(city, rowIndex) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const row = document.querySelector(`tbody tr:nth-child(${rowIndex})`);
            const cells = row.querySelectorAll('td');
            
            cells[0].textContent = data.main.temp + '°C';
            cells[1].textContent = data.main.humidity + '%';
            cells[2].textContent = data.wind.speed + ' m/s';
            cells[3].textContent = data.main.temp_max + '°C';
            cells[4].textContent = data.main.temp_min + '°C';
        })
        .catch(error => console.error(`Error fetching data for ${city}:`, error));
}

function updateAllCities() {
    cities.forEach((city, index) => {
        updateCityWeather(city, index + 1);
    });
}
document.addEventListener('DOMContentLoaded', updateAllCities);