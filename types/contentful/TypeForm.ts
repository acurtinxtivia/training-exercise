import type { Entry, EntryFields } from "contentful";

export interface TypeFormFields {
    internalName: EntryFields.Symbol;
    headline: EntryFields.Symbol;
    headlineSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subText?: EntryFields.RichText;
    textAlignment?: "Center" | "Left" | "Right";
    backgroundColor?: EntryFields.Object;
    textColor?: EntryFields.Object;
    maxWidth: EntryFields.Integer;
}

export type TypeForm = Entry<TypeFormFields>;
