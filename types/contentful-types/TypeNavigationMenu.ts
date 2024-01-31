import type { EntryFields } from "contentful";
import type { TypeNavigationItemFields } from "./TypeNavigationItem";
import type { Entry } from "./TypeEntry";

export interface TypeNavigationMenuFields {
    internalName?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    navigationItems?: Entry<TypeNavigationItemFields>[];
}

export type TypeNavigationMenu = Entry<TypeNavigationMenuFields>;
