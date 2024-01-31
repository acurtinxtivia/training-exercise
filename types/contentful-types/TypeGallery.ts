import type { EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { Entry } from "./TypeEntry";

export interface TypeGalleryFields {
    internalName: EntryFields.Symbol;
    title: EntryFields.Symbol;
    titleSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    images: Entry<TypeImageWithFocalPointFields>[];
    maxWidth: EntryFields.Integer;
}

export type TypeGallery = Entry<TypeGalleryFields>;
