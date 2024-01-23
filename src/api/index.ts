import * as contentful from 'contentful';
import type { ContentfulClientApi, EntryFieldTypes } from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

let client: ContentfulClientApi<undefined> | undefined;

if (accessToken && space) {
    client = contentful.createClient({
        space,
        accessToken,
    });
}


async function fetchEntries(contentType: string, slug: string) {
    if (accessToken && client) {
        const entries = await client.getEntries({
            content_type: contentType,
            "fields.slug": slug,
            include: 5
        });

        if (entries.items) return entries.items;
        console.log(`Error getting entries for ${contentType}`);
    }
    console.log("Access Token is undefined");
}

export async function fetchLandingEntriesBySlug(slug: string = 'home') {
    console.log('Fetching Published');
    return await fetchEntries("pageLanding", slug);
}
