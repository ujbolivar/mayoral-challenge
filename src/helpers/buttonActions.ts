import {
    type AssignPayload,
    type HandlePayload,
    type Message,
    type PrintPayload,
    type LogPayload,
} from '@/types/all_typedefs';

// Assign's a product title to the messages in the payload object

const handlePayload: HandlePayload = (title) => {
    return {
        añadir: `el usuario ha añadido ${title} al carrito`,
        colores: `El usuario desea ver el producto ${title} en otros colores`,
    };
};

// Picks the correct message from the payload object based on the action and returns it

const assignPayload: AssignPayload = (action, payload) => payload[action];

// Receives the payload and prepares to log in the console

const printPayload: PrintPayload = (payload) => console.log(payload);

// Receives the print and assign functions

export const logPayload: LogPayload = (action, title) => {
    printPayload(assignPayload(action, handlePayload(title)) as unknown as Message);
};
