import type { Entry, EntryFields } from "contentful";
import type { TypeTestimonialFields } from "./TypeTestimonial";

export interface TypeSetOfTestimonialsFields {
    internalName?: EntryFields.Symbol;
    title: EntryFields.Symbol;
    titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subText?: EntryFields.Symbol;
    testimonials?: Entry<TypeTestimonialFields>[];
    maxWidth?: EntryFields.Integer;
}

export type TypeSetOfTestimonials = Entry<TypeSetOfTestimonialsFields>;
