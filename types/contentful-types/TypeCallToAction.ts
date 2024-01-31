import type { EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeLinkFields } from "./TypeLink";

import type { Entry } from "./TypeEntry";


export interface TypeCallToActionFields {
    internalName: EntryFields.Symbol;
    headline: EntryFields.Symbol;
    headlineSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    headlineAlignment: "Center" | "Left" | "Right";
    subText: EntryFields.RichText;
    subTextAlignment: "Center" | "Left" | "Right";
    actions?: Entry<TypeLinkFields>[];
    actionAlignment?: "Horizontal" | "Vertical";
    image: Entry<TypeImageWithFocalPointFields>;
    imageAlignment: "Background" | "Bottom" | "Left" | "Right" | "Top";
    mobileImageAlignment?: "Bottom" | "Top";
    contentAlignment?: "Center" | "Left" | "Right";
    contentMaxWidth?: EntryFields.Integer;
    maxWidth: EntryFields.Integer;
}

export type TypeCallToAction = Entry<TypeCallToActionFields>;
