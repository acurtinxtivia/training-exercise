import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeIconFields } from "./TypeIcon";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";

export interface TypeCardFields {
    internalName: EntryFields.Symbol;
    title: EntryFields.Symbol;
    titleSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subText: EntryFields.Symbol;
    image?: Entry<TypeImageWithFocalPointFields>;
    materialDesignIcon?: Entry<TypeIconFields>;
    customIcon?: Asset;
    iconSize: "lg" | "md" | "sm" | "xl" | "xxl" | "xxxl";
    iconColor?: EntryFields.Object;
    imagePosition?: "Bottom" | "Left" | "Right" | "Top";
}

export type TypeCard = Entry<TypeCardFields>;
