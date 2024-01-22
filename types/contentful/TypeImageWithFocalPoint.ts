import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeImageWithFocalPointFields {
    title: EntryFields.Symbol;
    image: Asset;
    altText: EntryFields.Symbol;
    caption?: EntryFields.Symbol;
    focalPoint: EntryFields.Object;
}

export type TypeImageWithFocalPoint = Entry<TypeImageWithFocalPointFields>;
