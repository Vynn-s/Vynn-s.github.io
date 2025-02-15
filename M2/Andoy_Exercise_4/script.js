const apiKey = '45df3da263472105f74874935cc8243e';

// Davao City's Latitude & Longitude
const lat = 7.0736;
const lon = 125.6110;

document.getElementById("fetchWeatherBtn").addEventListener("click", callAPI);

function callAPI() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather Data:", data);

            document.querySelector("#weather_city").textContent = data.name || 'N/A';

            // Convert Kelvin to Celsius
            const tempCelsius = (data.main.temp - 273.15).toFixed(1);
            document.querySelector("#weather_temperature").textContent = `${tempCelsius}°C`;

            document.querySelector("#weather_condition").textContent = data.weather[0].description || 'N/A';
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Failed to fetch weather data. Please check your API key or try again later.");
        });
}