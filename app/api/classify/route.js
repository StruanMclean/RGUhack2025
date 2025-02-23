
const CLARIFAI_API_URL = 'https://api.clarifai.com/v2/models/general-image-recognition/outputs';
const CLARIFAI_PAT = process.env.CLARIFAI_PAT; // Store this token in .env.local for security
const IMAGE_URL = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg'; // Example image URL

export default async function handler(req, res) {
  // Ensure only POST requests are handled here
  if (req.method === 'POST') {
    try {
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
                  url: IMAGE_URL, // You can replace this with a dynamic URL from the client
                },
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error from Clarifai API: ${response.statusText}`);
      }

      const data = await response.json();
      const concepts = data.outputs[0].data.concepts;
      res.status(200).json({ concepts });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // If it's not a POST request, return Method Not Allowed
    res.status(405).json({ error: 'Method Nae Allowed' });
  }
}
