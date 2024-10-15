const apiKey = "dc735160a8ff4d5efb0523b4bfbcae14";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const geoApiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const searchBox = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const autocompleteContainer = document.querySelector('.autocomplete-suggestions');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else if (response.ok) {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        // Set weather icon based on condition
        switch (data.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = "images/cloudy.png";
                break;
            case 'Clear':
                weatherIcon.src = "images/sun.png";
                break;
            case 'Rain':
                weatherIcon.src = "images/storm.png";
                break;
            case 'Mist':
                weatherIcon.src = "images/mist.png";
                break;
            case 'Drizzle':
                weatherIcon.src = "images/drizzle.png";
                break;
            default:
                weatherIcon.src = "images/default.png";
                break;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector('.error').style.display = 'none';
    } else {
        console.error("Error fetching weather data: ", data.message);
    }
}

async function fetchCitySuggestions(query) {
    const response = await fetch(`${geoApiUrl}${query}&limit=5&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

function displaySuggestions(cities) {
    autocompleteContainer.innerHTML = ""; // Clear previous suggestions

    if (cities.length === 0) return; // Don't display anything if no suggestions

    cities.forEach(city => {
        const suggestionItem = document.createElement("div");
        suggestionItem.innerHTML = `${city.name}, ${city.country}`;
        suggestionItem.addEventListener('click', () => {
            searchBox.value = city.name;
            autocompleteContainer.innerHTML = ""; // Clear suggestions after selecting
            checkWeather(city.name); // Fetch weather after selection
        });
        autocompleteContainer.appendChild(suggestionItem);
    });
}

// Event listener for input in the search box to show suggestions
searchBox.addEventListener('input', async () => {
    const query = searchBox.value;
    if (query.length >= 2) { // Fetch suggestions after 2 characters
        const cities = await fetchCitySuggestions(query);
        displaySuggestions(cities);
    } else {
        autocompleteContainer.innerHTML = ""; // Clear suggestions if input is less than 2 characters
    }
});
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

// Event listener for the "Enter" key to trigger search
searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // "Enter" key pressed
        event.preventDefault();
        searchBtn.click(); // Trigger search button click
        autocompleteContainer.innerHTML = "";
    }
});
