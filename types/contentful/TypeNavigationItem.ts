import type { Entry, EntryFields } from "contentful";

export interface TypeNavigationItemFields {
    internalName?: EntryFields.Symbol;
    label?: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    children?: Entry<TypeNavigationItemFields>;
}

export type TypeNavigationItem = Entry<TypeNavigationItemFields>;
