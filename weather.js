async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "08c9432d4ec142d5a4c180732251303"; // Replace with your API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found!");
        const data = await response.json();

        const temperature = data.current.temp_c;
        const humidity = data.current.humidity;
        const airQuality = data.current.air_quality.pm2_5;
        const rainChance = data.current.cloud; // Approximate cloud coverage as rain probability

        document.getElementById("weatherInfo").innerHTML = `
            <p><strong>Temperature:</strong> ${temperature}°C 🌡️</p>
            <p><strong>Humidity:</strong> ${humidity}% 💧</p>
            <p><strong>Air Quality (PM2.5):</strong> ${airQuality} 🌫️</p>
            <p><strong>Chance of Rain:</strong> ${rainChance}% 🌧️</p>
        `;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}
