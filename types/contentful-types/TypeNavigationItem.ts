import type { EntryFields } from "contentful";
import type { TypeNavigationMenuFields } from "./TypeNavigationMenu";
import type { Entry } from "./TypeEntry";

export interface TypeNavigationItemFields {
    internalName?: EntryFields.Symbol;
    label?: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    children?: Entry<TypeNavigationItemFields | TypeNavigationMenuFields>;
    submenus?: Entry<TypeNavigationMenuFields>[];
}

export type TypeNavigationItem = Entry<TypeNavigationItemFields>;
