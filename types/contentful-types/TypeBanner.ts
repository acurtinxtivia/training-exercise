import type { EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeLinkFields } from "./TypeLink";
import type { TypeColor } from "./TypeColor";
import type { Entry } from "./TypeEntry";

export interface TypeBannerFields {
    internalName: EntryFields.Symbol;
    headline: EntryFields.Symbol;
    headlineSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subText?: EntryFields.RichText;
    sectionAlignment: "Center" | "Left" | "Right";
    textAlignment?: "Center" | "Left" | "Right";
    textColor?: TypeColor;
    increaseVerticalPadding?: "x1.5" | "x2" | "x3" | "x4" | "x5";
    backgroundImage?: Entry<TypeImageWithFocalPointFields>;
    backgroundColor?: TypeColor;
    actions?: Entry<TypeLinkFields>[];
    darkenImage?: EntryFields.Boolean;
    contentMaxWidth?: EntryFields.Integer;
    maxWidth: EntryFields.Integer;
    animateList?: EntryFields.Boolean;
}

export type TypeBanner = Entry<TypeBannerFields>;
