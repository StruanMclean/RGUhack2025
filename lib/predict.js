

export default async function predict(imageUrl) {
    const response = await fetch("https://1bae-94-119-32-69.ngrok-free.app/predict", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({ image_url: imageUrl }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch prediction');
    }

    const data = await response.json();

    alert(data["predicted_class"])

    return data["predicted_class"]
}