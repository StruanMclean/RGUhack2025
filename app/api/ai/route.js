import fetch from 'node-fetch'; // You can also use built-in fetch if you're on Next.js 13 or later

const CLARIFAI_API_URL = 'https://api.clarifai.com/v2/models/general-image-recognition/outputs';
const CLARIFAI_PAT = 'd07f6246f72945b29988d6dcb92cc58b'; // Your Personal Access Token (PAT)
const IMAGE_URL = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg'; // Example image URL

export default async function handler(req, res) {
  try {
    // Send request to Clarifai API for image prediction
    const response = await fetch(CLARIFAI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CLARIFAI_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: [
          {
            data: {
              image: {
                url: IMAGE_URL, // You can also accept the image URL dynamically from the user
              },
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error from Clarifai API: ${response.statusText}`);
    }

    // Parse the API response
    const data = await response.json();
    
    // Assuming the response structure is correct, extract the concepts (predictions)
    const concepts = data.outputs[0].data.concepts;

    // Send the concepts back as the response
    res.status(200).json({ concepts });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
