import type { Entry, EntryFields } from "contentful";
import type { TypeCardFields } from "./TypeCard";

export interface TypeSetOfCardFields {
    internalName: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subText?: EntryFields.RichText;
    cards: Entry<TypeCardFields>[];
    cardDisplayStyle: "Horizontal" | "Vertical";
    cardsInARow?: EntryFields.Integer;
    maxWidth?: EntryFields.Integer;
}

export type TypeSetOfCard = Entry<TypeSetOfCardFields>;
