import type { Entry, EntryFields } from "contentful";
import type { TypeBannerFields } from "./TypeBanner";
import type { TypeCallToActionFields } from "./TypeCallToAction";
import type { TypeCardsWithFormFields } from "./TypeCardsWithForm";
import type { TypeFooterFields } from "./TypeFooter";
import type { TypeFormFields } from "./TypeForm";
import type { TypeGalleryFields } from "./TypeGallery";
import type { TypeHeaderFields } from "./TypeHeader";
import type { TypeHeroImageFields } from "./TypeHeroImage";
import type { TypeImageAndTextFields } from "./TypeImageAndText";
import type { TypeSeoFields } from "./TypeSeo";
import type { TypeSetOfCardFields } from "./TypeSetOfCard";
import type { TypeSetOfTestimonialsFields } from "./TypeSetOfTestimonials";

export interface TypePageLandingFields {
    name?: EntryFields.Symbol;
    pageTitle: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    seo?: Entry<TypeSeoFields>;
    sections: Entry<TypeBannerFields | TypeCallToActionFields | TypeCardsWithFormFields | TypeFooterFields | TypeFormFields | TypeGalleryFields | TypeHeaderFields | TypeHeroImageFields | TypeImageAndTextFields | TypeSetOfCardFields | TypeSetOfTestimonialsFields>[];
}

export type TypePageLanding = Entry<TypePageLandingFields>;
