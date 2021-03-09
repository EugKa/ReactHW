import { Action } from "../types";

export interface RequestPayload<P = any> {
    path: string;
    method?: string,
    authRequired?: boolean;
    onSuccess?: (p?: P) => void;
    onError?: (e?: any) => void;
}

export enum ACTION_TYPES {
    REQUEST = '@@SERVICE/REQUEST',
    SUCCESS='@@SERVICE/SUCCESS',
    ERROR='@@SERVICE/ERROR'
}

export interface ActionService<P = any> 
extends Action<ACTION_TYPES>, RequestPayload<P> {}

