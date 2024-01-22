import type { Entry, EntryFields } from "contentful";

export interface TypeTestimonialFields {
    internalName: EntryFields.Symbol;
    name: EntryFields.Symbol;
    location: EntryFields.Symbol;
    testimonial: EntryFields.RichText;
    product?: EntryFields.Symbol;
}

export type TypeTestimonial = Entry<TypeTestimonialFields>;
