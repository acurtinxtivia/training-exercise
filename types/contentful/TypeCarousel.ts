import type { Entry, EntryFields } from "contentful";
import type { TypeHeroImageFields } from "./TypeHeroImage";

export interface TypeCarouselFields {
    internalName: EntryFields.Symbol;
    slides: Entry<TypeHeroImageFields>[];
    autoSlide: EntryFields.Boolean;
    slideDuration?: EntryFields.Integer;
}

export type TypeCarousel = Entry<TypeCarouselFields>;
