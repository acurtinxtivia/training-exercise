import type { Entry, EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";

export interface TypeImageAndTextFields {
    internalName: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    image: Entry<TypeImageWithFocalPointFields>;
    text: EntryFields.RichText;
    imagePosition: "Bottom" | "Left" | "Right" | "Top";
    titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    maxWidth: EntryFields.Integer;
}

export type TypeImageAndText = Entry<TypeImageAndTextFields>;
