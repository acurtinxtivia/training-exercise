import type { Entry, EntryFields } from "contentful";
import type { TypeNavigationItemFields } from "./TypeNavigationItem";

export interface TypeNavigationMenuFields {
    internalName?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    navigationItems?: Entry<TypeNavigationItemFields>[];
}

export type TypeNavigationMenu = Entry<TypeNavigationMenuFields>;
