import type { Entry, EntryFields } from "contentful";
import type { TypeMarketoFormFields } from "./TypeMarketoForm";
import type { TypeSetOfCardFields } from "./TypeSetOfCard";

export interface TypeCardsWithFormFields {
    internalName?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    titleSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    cards: Entry<TypeSetOfCardFields>;
    form?: Entry<TypeMarketoFormFields>;
    mobileOrder: "Cards" | "Form";
    maxWidth: EntryFields.Integer;
}

export type TypeCardsWithForm = Entry<TypeCardsWithFormFields>;
