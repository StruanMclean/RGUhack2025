import { createClient } from 'pexels';

export async function fetchImages(query) {
    const encodedQuery = encodeURIComponent(query);

    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_ACCESS_KEY);

    const photos = await client.photos.search({ query, per_page: 5 })

    return photos.photos || [];
}
