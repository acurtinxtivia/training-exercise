import type { Entry, EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeLinkFields } from "./TypeLink";

export interface TypeHeroImageFields {
    internalName?: EntryFields.Symbol;
    headline: EntryFields.Symbol;
    headlineSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subText?: EntryFields.RichText;
    sectionAlignment?: "Center" | "Left" | "Right";
    textAlignment?: "Center" | "Left" | "Right";
    textColor?: EntryFields.Object;
    image: Entry<TypeImageWithFocalPointFields>;
    darkenImage?: EntryFields.Boolean;
    actions?: Entry<TypeLinkFields>[];
    actionAlignment: "Horizontal" | "Vertical";
    contentMaxWidth?: EntryFields.Integer;
    maxWidth: EntryFields.Integer;
    headlineMaxWidth?: EntryFields.Integer;
    headlineRich: EntryFields.RichText;
}

export type TypeHeroImage = Entry<TypeHeroImageFields>;
