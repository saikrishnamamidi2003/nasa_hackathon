import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

# Path to the uploaded image file
image_path = 'ag.jpg'  # Update this path to your image file

# Step 1: Open the image
img = Image.open(image_path)
img = img.convert('L')  # Convert to grayscale

# Step 2: Convert image to numpy array
img_array = np.array(img)

# Simulate NIR and Red bands using the grayscale image (this is just for demonstration)
nir_band = img_array * 1.2  # Dummy transformation to simulate NIR band
red_band = img_array * 0.8  # Dummy transformation to simulate Red band

# Clip values to the range [0, 255] to simulate realistic band values
nir_band = np.clip(nir_band, 0, 255)
red_band = np.clip(red_band, 0, 255)

# Step 3: Calculate NDVI
ndvi = (nir_band - red_band) / (nir_band + red_band)

# Step 4: Display the NDVI
plt.imshow(ndvi, cmap='RdYlGn')
plt.colorbar()
plt.title('NDVI')
plt.show()

# Step 5: Count the soil fertility based on NDVI
# Assuming NDVI > 0.5 indicates high fertility, 0.2 < NDVI <= 0.5 indicates moderate fertility, and NDVI <= 0.2 indicates low fertility
high_fertility = np.sum(ndvi > 0.5)
moderate_fertility = np.sum((ndvi > 0.2) & (ndvi <= 0.5))
low_fertility = np.sum(ndvi <= 0.2) 

# Step 6: Display the soil fertility counts
print(f'High Fertility Areas: {high_fertility}')
print(f'Moderate Fertility Areas: {moderate_fertility}')
print(f'Low Fertility Areas: {low_fertility}')

# Step 7: Estimate pH level (for demonstration purposes)
# Assuming high NDVI corresponds to neutral pH (~7), moderate NDVI to slightly acidic (~6), and low NDVI to acidic (~5)
average_ndvi = np.mean(ndvi)
if average_ndvi > 0.5:
    estimated_ph = 7
elif average_ndvi > 0.2:
    estimated_ph = 6
else:
    estimated_ph = 5

# Step 8: Display the estimated pH level
print(f'Estimated Soil pH Level: {estimated_ph}')