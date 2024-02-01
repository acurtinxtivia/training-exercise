import { Metadata } from "contentful";

interface ContentTypeSys {
    type: string;
    linkType: string;
    id: string;
}

interface ContentType {
    sys: ContentTypeSys;
}

export interface Sys {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: ContentType;
}

export interface Entry<T> {
    sys: Sys;
    fields: T;
    metadata: Metadata;
}