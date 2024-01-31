import type { EntryFields } from "contentful";
import type { Entry } from "./TypeEntry";

export interface TypeContactInfoFields {
    internalName: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    hours?: EntryFields.Symbol;
    hoursSubtext?: EntryFields.Symbol;
    address?: EntryFields.Symbol;
    addressSubtext?: EntryFields.Symbol;
    phoneNumber?: EntryFields.Symbol;
    email?: EntryFields.Symbol;
}

export type TypeContactInfo = Entry<TypeContactInfoFields>;
