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

async function fetchEntries(options: any) {
    if (accessToken && client) {
        const entries = await client.getEntries({
            order: '-sys.createdAt',
            include: 5,
            ...options,
        });

        if (entries.items) return entries.items;
        console.log(`Error getting entries`);
    }
    console.log("Access Token is undefined");
}

export async function fetchAllPages() {
    return await fetchEntries({ content_type: 'pageLanding' })
}

export async function fetchLandingEntriesBySlug(slug: string = 'home') {
    console.log('Fetching Published');
    return await fetchEntries({content_type: "pageLanding", "fields.slug": slug});
}

export async function fetchBlogPosts(limit = 0) {
    const options: any = {
        content_type: 'blogPost',
    }
    if (limit) options.limit = limit
    return await fetchEntries(options)
}

export async function fetchBlogPostBySlug(slug = '') {
    return await fetchEntries({
        content_type: 'blogPost',
        'fields.slug': slug
    })
}

export async function fetchBlogPostsByTopic(topic: string, postId?: string, limit = 3) {
    const options: any = {
        content_type: 'blogPost',
        'fields.topic': topic,
        limit,
    }
    if (postId) {
        options['sys.id[ne]'] = postId
    }
    return await fetchEntries(options)
}

export async function fetchAllTopics() {
    return await fetchEntries({
        content_type: 'blogPostTopic'
    })
}