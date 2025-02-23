

export default async function predict(imageUrl) {
    const isProduction = process.env.NODE_ENV === "production";

    const response = await fetch(isProduction == false ? 'http://localhost:8000/predict' : 'https://556e-94-119-32-15.ngrok-free.app', {
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