import type { Entry, EntryFields } from "contentful";
import type { TypeNavigationMenuFields } from "./TypeNavigationMenu";

export interface TypeNavigationItemFields {
    internalName?: EntryFields.Symbol;
    label?: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    children?: Entry<TypeNavigationItemFields | TypeNavigationMenuFields>;
    submenus?: Entry<TypeNavigationMenuFields>[];
}

export type TypeNavigationItem = Entry<TypeNavigationItemFields>;
