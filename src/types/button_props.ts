import { type Product } from '@/types/all_typedefs';

// Union that describes the possible values of the action
export type Action = 'añadir' | 'colores';

// Type that describes the the message

export type Message = string;

// Type that describes the possible values of the payload
export interface Payload {
    añadir?: Message;
    colores?: Message;
}

// Interface that represents the handlePayload function
export interface HandlePayload {
    (title: string): Payload;
}
// Interface that represents the handlePayload function

export interface AssignPayload {
    (action: Action, payload: Payload): Message;
}

// Interface that represents the printAction function

export interface PrintPayload {
    (payload: Message): void;
}

// Interface that represents the logAction function

export interface LogPayload {
    (action: Action, title: string): void;
}
