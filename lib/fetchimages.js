
export async function fetchImages(query) {
    const encodedQuery = encodeURIComponent(query);

    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodedQuery}&per_page=5`, {
        headers: {
            Authorization: `Bearer ${process.env.PEXELS_API_KEY}`, 
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data.photos || [];
}
