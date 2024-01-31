import type { EntryFields } from "contentful";
import type { TypeBannerFields } from "./TypeBanner";
import type { TypeBlogPostTopicFields } from "./TypeBlogPostTopic";
import type { TypeFooterFields } from "./TypeFooter";
import type { TypeHeaderFields } from "./TypeHeader";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";

import type { Entry } from "./TypeEntry";

export interface TypeBlogPostFields {
    internalName: EntryFields.Symbol;
    pageHeader: Entry<TypeHeaderFields>;
    banner: Entry<TypeBannerFields>;
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    blogTopic: Entry<TypeBlogPostTopicFields>;
    featuredImage: Entry<TypeImageWithFocalPointFields>;
    postContent: EntryFields.RichText;
    pageFooter: Entry<TypeFooterFields>;
}

export type TypeBlogPost = Entry<TypeBlogPostFields>;
