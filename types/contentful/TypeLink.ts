import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeIconFields } from "./TypeIcon";

export interface TypeLinkFields {
    internalName: EntryFields.Symbol;
    label: EntryFields.Symbol;
    href?: EntryFields.Symbol;
    target?: "_blank" | "_self";
    isExternal?: EntryFields.Boolean;
    displayStyle?: "Button" | "Link";
    materialDesignIcon?: Entry<TypeIconFields>;
    theme?: "image" | "primary" | "secondary";
    buttonImage?: Asset;
}

export type TypeLink = Entry<TypeLinkFields>;
