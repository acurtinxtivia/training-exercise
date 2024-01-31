import type { EntryFields } from "contentful";

import type { Entry } from "./TypeEntry";

export interface TypeBlogPostTopicFields {
    internalName: EntryFields.Symbol;
    label: EntryFields.Symbol;
}

export type TypeBlogPostTopic = Entry<TypeBlogPostTopicFields>;
