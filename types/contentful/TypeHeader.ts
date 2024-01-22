import type { Entry, EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeLinkFields } from "./TypeLink";
import type { TypeNavigationMenuFields } from "./TypeNavigationMenu";

export interface TypeHeaderFields {
    internalName: EntryFields.Symbol;
    logo: Entry<TypeImageWithFocalPointFields>;
    logoSuffix?: EntryFields.Symbol;
    tagline?: EntryFields.Symbol;
    taglineSubtext?: EntryFields.Symbol;
    navigationMenu?: Entry<TypeNavigationMenuFields>;
    actions?: Entry<TypeLinkFields>[];
    maxWidth: EntryFields.Integer;
}

export type TypeHeader = Entry<TypeHeaderFields>;
