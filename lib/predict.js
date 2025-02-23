

export default async function predict(imageUrl) {
    const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: imageUrl }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch prediction');
    }

    const data = await response.json();

    alert(data["predicted_class"])
}