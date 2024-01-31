import type { Entry, EntryFields } from "contentful";

export interface TypeBlogListFields {
    internalName: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    numberOfPosts: EntryFields.Integer;
}

export type TypeBlogList = Entry<TypeBlogListFields>;
