// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

const marker = L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('A selected agricultural area.')
  .openPopup();

document.getElementById('fetchDataButton').addEventListener('click', async () => {
  const lat = document.getElementById('latitude').value;
  const lon = document.getElementById('longitude').value;

  if (!lat || !lon) {
    alert('Please enter both latitude and longitude.');
    return;
  }

  try {
    // Mock data fetch for satellite, weather, and soil data
    const satelliteData = { image: 'Satellite Image Data' };
    const weatherData = { temperature: '22°C', humidity: '60%' };
    const soilData = { moisture: '30%', type: 'Loamy' };

    document.getElementById('satelliteData').textContent = JSON.stringify(satelliteData, null, 2);
    document.getElementById('weatherData').textContent = JSON.stringify(weatherData, null, 2);
    document.getElementById('soilData').textContent = JSON.stringify(soilData, null, 2);

    // Mock AI model for crop recommendation
    const recommendation = recommendCrop([satelliteData, weatherData, soilData]);
    document.getElementById('cropRecommendation').textContent = recommendation;
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('Failed to fetch data. Please try again later.');
  }
});

const recommendCrop = (data) => {
  // This is a placeholder for the AI model logic
  // In a real application, you would use TensorFlow.js to load and run the model
  const crops = ['Wheat', 'Corn', 'Rice', 'Soybeans'];
  // Mock recommendation logic
  const randomIndex = Math.floor(Math.random() * crops.length);
  return crops[randomIndex];
};

// Update UI with crop recommendation
const updateUI = async () => {
  const data = await fetchData();
  const recommendedCrop = recommendCrop(data);

  document.getElementById('crop-info').innerHTML = `
    <p><strong>Satellite Data:</strong> ${data.satellite}</p>
    <p><strong>Weather Data:</strong> ${data.weather}</p>
    <p><strong>Soil Data:</strong> ${data.soil}</p>
    <p><strong>Recommended Crop:</strong> ${recommendedCrop}</p>
  `;
};

// Fetch data and update UI on page load
updateUI();
