import type { EntryFields } from "contentful";

import type { Entry } from "./TypeEntry";


export interface TypeBlogListFields {
    internalName: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    numberOfPosts: EntryFields.Integer;
}

export type TypeBlogList = Entry<TypeBlogListFields>;
