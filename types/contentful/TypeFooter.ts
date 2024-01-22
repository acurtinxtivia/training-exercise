import type { Entry, EntryFields } from "contentful";

export interface TypeFooterFields {
    internalName: EntryFields.Symbol;
    content?: EntryFields.RichText;
    maxWidth?: EntryFields.Integer;
}

export type TypeFooter = Entry<TypeFooterFields>;
