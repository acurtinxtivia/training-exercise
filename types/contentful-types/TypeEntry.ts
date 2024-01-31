interface ContentType {
    sys: Sys;
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
    metadata: any;
}