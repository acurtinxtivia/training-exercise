import type { EntryFields } from "contentful";
import type { TypeContactInfoFields } from "./TypeContactInfo";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeLinkFields } from "./TypeLink";
import type { TypeNavigationMenuFields } from "./TypeNavigationMenu";
import type { Entry } from "./TypeEntry";

export interface TypeHeaderFields {
    internalName: EntryFields.Symbol;
    logo: Entry<TypeImageWithFocalPointFields>;
    logoSuffix?: EntryFields.Symbol;
    tagline?: EntryFields.Symbol;
    taglineSubtext?: EntryFields.Symbol;
    contactInfo?: Entry<TypeContactInfoFields>;
    navigationMenu?: Entry<TypeNavigationMenuFields>;
    actions?: Entry<TypeLinkFields>[];
    maxWidth: EntryFields.Integer;
}

export type TypeHeader = Entry<TypeHeaderFields>;
