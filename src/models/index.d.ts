import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNote2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note2 = LazyLoading extends LazyLoadingDisabled ? EagerNote2 : LazyNote2

export declare const Note2: (new (init: ModelInit<Note2>) => Note2) & {
  copyOf(source: Note2, mutator: (draft: MutableModel<Note2>) => MutableModel<Note2> | void): Note2;
}