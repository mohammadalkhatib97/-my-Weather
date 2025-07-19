async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "8160ac553dbe761972a4892badb5af37";
  const resultDiv = document.getElementById('result');

  if (!city) {
    resultDiv.innerText = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    resultDiv.innerText = `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (error) {
    resultDiv.innerText = "Error: " + error.message;
  }
}

