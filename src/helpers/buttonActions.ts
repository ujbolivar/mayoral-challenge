import {
    type AssignPayload,
    type HandlePayload,
    type Message,
    type PrintPayload,
    type LogPayload,
} from '@/types/all_typedefs';

// Assign's a product title to the messages in the payload object

export const handlePayload: HandlePayload = (title) => {
    return {
        añadir: `el usuario ha añadido ${title} al carrito`,
        colores: `El usuario desea ver el producto ${title} en otros colores`,
    };
};

// Picks the correct message from the payload object based on the action and returns it

export const assignPayload: AssignPayload = (action, title, handlePayload) =>
    handlePayload(title)[action];

// Receives the payload and prepares to log in the console

export const printPayload: PrintPayload = (payload) => console.log(payload);

// Receives the print and assign functions

export const logPayload: LogPayload = (print, assign) => {
    print(assign as unknown as Message);
};
