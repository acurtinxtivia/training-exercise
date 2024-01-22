import type { Entry, EntryFields } from "contentful";
import type { TypeImageWithFocalPointFields } from "./TypeImageWithFocalPoint";
import type { TypeSeoMetaFields } from "./TypeSeoMeta";

export interface TypeSeoFields {
    name: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    keywords?: EntryFields.Symbol[];
    no_index?: EntryFields.Boolean;
    no_follow?: EntryFields.Boolean;
    image?: Entry<TypeImageWithFocalPointFields>;
    openGraphType?: EntryFields.Symbol;
    openGraphSiteName?: EntryFields.Symbol;
    additionalMetas?: Entry<TypeSeoMetaFields>[];
    structuredData?: EntryFields.Object;
}

export type TypeSeo = Entry<TypeSeoFields>;
