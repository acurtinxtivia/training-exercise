import type { Asset, EntryFields } from "contentful";
import type { TypeIconFields } from "./TypeIcon";
import type { Entry } from "./TypeEntry";

export interface TypeLinkFields {
    internalName: EntryFields.Symbol;
    label: EntryFields.Symbol;
    href?: EntryFields.Symbol;
    target?: "_blank" | "_self";
    isExternal?: EntryFields.Boolean;
    displayStyle?: "Button" | "Link";
    materialDesignIcon?: Entry<TypeIconFields>;
    theme?: "image" | "primary" | "secondary" | "white";
    buttonImage?: Asset;
}

export type TypeLink = Entry<TypeLinkFields>;
