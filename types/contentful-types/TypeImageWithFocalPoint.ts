import type { Asset, EntryFields } from "contentful";
import type { Entry } from "./TypeEntry";

interface ImageFileDetails {
    size: number;
    image: {
        width: number;
        height: number;
    }
}

interface ImageFile {
    contentType: string;
    fileName: string;
    url: string;
    details: ImageFileDetails;
}

interface Image {
    title: string;
    description: string;
    file: ImageFile;
}

export interface TypeImageWithFocalPointFields {
    title: EntryFields.Symbol;
    image: Entry<Image>
    altText: EntryFields.Symbol;
    caption?: EntryFields.Symbol;
    focalPoint: EntryFields.Object;
}

export type TypeImageWithFocalPoint = Entry<TypeImageWithFocalPointFields>;
