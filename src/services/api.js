const API_BASE_URL = 'http://localhost:5000';

export const predictFabric = async (imageFile) => {
  if (!imageFile) {
    throw new Error('Please select a fabric image before analyzing.');
  }

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!allowedTypes.includes(imageFile.type)) {
    throw new Error('Only JPG, JPEG, and PNG images are supported.');
  }

  const maxSizeInBytes = 10 * 1024 * 1024;
  if (imageFile.size > maxSizeInBytes) {
    throw new Error('Image is too large. Please upload a file under 10MB.');
  }

  const formData = new FormData();
  formData.append('image', imageFile);

  let response;
  try {
    response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    throw new Error('Backend is offline or unreachable. Please make sure the API server is running on localhost:5000.');
  }

  if (!response.ok) {
    let message = 'Prediction failed due to a server error.';

    try {
      const errorPayload = await response.json();
      if (errorPayload?.error) message = errorPayload.error;
      if (errorPayload?.message) message = errorPayload.message;
    } catch {
      // ignore JSON parse errors and fall back to generic messages
    }

    throw new Error(message || 'Upload failed. Please try again.');
  }

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error('The backend returned an invalid JSON response.');
  }

  if (!payload || typeof payload !== 'object') {
    throw new Error('Prediction response was invalid.');
  }

  if (!payload.prediction || typeof payload.prediction !== 'string') {
    throw new Error('Prediction result was missing a valid class name.');
  }

  if (typeof payload.confidence !== 'number' && typeof payload.confidence !== 'string') {
    throw new Error('Prediction result was missing a valid confidence score.');
  }

  if (payload.probabilities && typeof payload.probabilities !== 'object') {
    throw new Error('Prediction result was missing valid probability data.');
  }

  return payload;
};

export default { predictFabric };
