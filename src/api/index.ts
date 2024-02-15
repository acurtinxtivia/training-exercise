import * as contentful from "contentful";
import type { ContentfulClientApi, EntrySkeletonType } from "contentful";
import {
  TypeBlogPostFields,
  TypeBlogPostTopicFields,
  TypePageLandingFields,
} from "../../types/contentful-types";
import { kameleoonLandingParser } from "./kameleoonParser";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

type PageLandingSkeleton = EntrySkeletonType<
  TypePageLandingFields,
  "pageLanding"
>;
type BlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, "blogPost">;
type TopicSkeleton = EntrySkeletonType<
  TypeBlogPostTopicFields,
  "blogPostTopic"
>;
type FetchLandingPagesOptions = {
  "fields.slug"?: string;
};
type FetchBlogPostsOptions = {
  "fields.slug"?: string;
  limit?: number;
  "sys.id[ne]"?: string;
  "fields.blogTopic.sys.id"?: string;
};
type FetchTopicsOptions = {};

let client: ContentfulClientApi<undefined> | undefined;

if (accessToken && space) {
  client = contentful.createClient({
    space,
    accessToken,
  });
}

export async function fetchKameleoonContainers() {
  if (accessToken && client) {
    const entries = await client.getEntries({
      content_type: "kameleoonVariationContainer",
      include: 5,
    });

    if (entries.items) return entries.items;
    console.log(`Error getting entries`);
  }
  console.log("Access Token is undefined");
}

async function fetchLandingPages(options: FetchLandingPagesOptions = {}) {
  if (accessToken && client) {
    const entries = await client.getEntries<PageLandingSkeleton>({
      content_type: "pageLanding",
      order: ["-sys.createdAt"],
      include: 5,
      ...options,
    });

    if (entries.items) return entries.items;
    console.log(`Error getting entries`);
  }
  console.log("Access Token is undefined");
}

async function fetchBlogPosts(options: FetchBlogPostsOptions = {}) {
  if (accessToken && client) {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-sys.createdAt"],
      include: 5,
      ...options,
    });

    if (entries.items) return entries.items;
    console.log(`Error getting entries`);
  }
  console.log("Access Token is undefined");
}

async function fetchTopics(options: FetchTopicsOptions = {}) {
  if (accessToken && client) {
    const entries = await client.getEntries<TopicSkeleton>({
      content_type: "blogPostTopic",
      order: ["-sys.createdAt"],
      include: 5,
      ...options,
    });

    if (entries.items) return entries.items;
    console.log(`Error getting entries`);
  }
  console.log("Access Token is undefined");
}

export async function fetchAllPages() {
  return await fetchLandingPages();
}

export async function fetchLandingEntriesBySlug(slug: string = "home") {
  console.log("Fetching Published");
  return await fetchLandingPages({ "fields.slug": slug });
}

export async function fetchAllBlogPosts() {
  return await fetchBlogPosts();
}

export async function fetchBlogPostBySlug(slug = "") {
  return await fetchBlogPosts({
    "fields.slug": slug,
  });
}

export async function fetchBlogPostsByTopic(
  topic: string,
  excludeId?: string,
  limit = 3
) {
  const options: FetchBlogPostsOptions = {
    "fields.blogTopic.sys.id": topic,
    limit,
  };

  if (excludeId) {
    options["sys.id[ne]"] = excludeId;
  }
  return await fetchBlogPosts(options);
}

export async function fetchAllTopics() {
  return await fetchTopics();
}
