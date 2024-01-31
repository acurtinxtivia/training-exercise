import type { Entry, EntryFields } from "contentful";

export interface TypeBlogPostTopicFields {
    internalName: EntryFields.Symbol;
    label: EntryFields.Symbol;
}

export type TypeBlogPostTopic = Entry<TypeBlogPostTopicFields>;
