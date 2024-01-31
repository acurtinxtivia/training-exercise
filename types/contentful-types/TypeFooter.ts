import type { EntryFields } from "contentful";
import type { TypeContactInfoFields } from "./TypeContactInfo";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeLinkFields } from "./TypeLink";
import type { TypeNavigationMenuFields } from "./TypeNavigationMenu";
import type { Entry } from "./TypeEntry";

export interface TypeFooterFields {
    internalName: EntryFields.Symbol;
    logo: Entry<TypeImageWithFocalPointFields>;
    content?: EntryFields.RichText;
    contactInfo?: Entry<TypeContactInfoFields>;
    navigation?: Entry<TypeNavigationMenuFields>;
    maxWidth?: EntryFields.Integer;
    subscribe?: EntryFields.Boolean;
    socialLinks?: Entry<TypeLinkFields>[];
    bottomText?: EntryFields.RichText;
}

export type TypeFooter = Entry<TypeFooterFields>;
