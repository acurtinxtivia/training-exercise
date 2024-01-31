import type { Entry, EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";

export interface TypeTestimonialFields {
    internalName: EntryFields.Symbol;
    name: EntryFields.Symbol;
    image: Entry<TypeImageWithFocalPointFields>;
    location: EntryFields.Symbol;
    testimonial: EntryFields.RichText;
    product?: EntryFields.Symbol;
    position?: EntryFields.Symbol;
}

export type TypeTestimonial = Entry<TypeTestimonialFields>;
