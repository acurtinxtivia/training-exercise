import type { EntryFields } from "contentful";
import type { TypeHeroImageFields } from "./TypeHeroImage";
import type { Entry } from "./TypeEntry";

export interface TypeCarouselFields {
    internalName: EntryFields.Symbol;
    slides: Entry<TypeHeroImageFields>[];
    autoSlide: EntryFields.Boolean;
    slideDuration?: EntryFields.Integer;
}

export type TypeCarousel = Entry<TypeCarouselFields>;
