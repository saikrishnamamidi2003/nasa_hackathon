import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

# Path to the uploaded image file
image_path = 'yashwanth.jpg'  # Update this path to your image file

# Step 1: Open the image
img = Image.open(image_path)
img = img.convert('L')  # Convert to grayscale

# Step 2: Convert image to numpy array
img_array = np.array(img)

# Step 3: Display the original image
plt.imshow(img_array, cmap='viridis')
plt.colorbar()
plt.title('Original Image')
plt.show()

# Step 4: Normalize the data
normalized_data = (img_array - np.min(img_array)) / (np.max(img_array) - np.min(img_array))

# Step 5: Display the normalized image
plt.imshow(normalized_data, cmap='viridis')
plt.colorbar()
plt.title('Normalized Data')
plt.show()

# Step 6: Apply a threshold to identify water presence
threshold = 0.5
water_presence = normalized_data > threshold

# Step 7: Display the water presence map
plt.imshow(water_presence, cmap='Blues')
plt.colorbar()
plt.title('Water Presence Map')
plt.show()

# Step 8: Count the percentage of water presence
water_percentage = np.sum(water_presence) / water_presence.size * 100
print(f'Water Presence: {water_percentage:.2f}%')