import { fetchImages } from "./fetchimages";

export default async function predict(imageUrl) {
    const response = await fetch("https://a7a0-2a00-23ee-2700-218c-e03d-a941-79db-60e0.ngrok-free.app", {
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
    const images = await fetchImages(data["predicted_class"]).then((res) => {return res})

    return {class: data["predicted_class"], images: images}
}