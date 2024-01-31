import type { Entry, EntryFields } from "contentful";

export interface TypeIconFields {
    internalName: EntryFields.Symbol;
    iconName: EntryFields.Symbol;
}

export type TypeIcon = Entry<TypeIconFields>;
