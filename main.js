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