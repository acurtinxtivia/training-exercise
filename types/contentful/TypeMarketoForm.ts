import type { Entry, EntryFields } from "contentful";
import type { TypeFormFields } from "./TypeForm";

export interface TypeMarketoFormFields {
    formName: EntryFields.Symbol;
    form: Entry<TypeFormFields>;
    formId?: EntryFields.Symbol;
}

export type TypeMarketoForm = Entry<TypeMarketoFormFields>;
