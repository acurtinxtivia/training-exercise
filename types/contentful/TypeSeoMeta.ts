import type { Entry, EntryFields } from "contentful";

export interface TypeSeoMetaFields {
    internalName: EntryFields.Symbol;
    key: EntryFields.Symbol;
    content: EntryFields.Symbol;
}

export type TypeSeoMeta = Entry<TypeSeoMetaFields>;
