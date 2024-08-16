const recommendCrop = (data) => {
    // This is a placeholder for the AI model logic
    // In a real application, you would use TensorFlow.js to load and run the model
    const crops = ['Wheat', 'Corn', 'Rice', 'Soybeans'];
    // Mock recommendation logic
    const randomIndex = Math.floor(Math.random() * crops.length);
    return crops[randomIndex];
};