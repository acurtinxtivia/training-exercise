import type { Entry, EntryFields } from "contentful";

export interface TypeOptinMonsterFields {
    name: EntryFields.Symbol;
    id: EntryFields.Symbol;
}

export type TypeOptinMonster = Entry<TypeOptinMonsterFields>;
