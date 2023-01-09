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

// Logs payload in the console

const printPayload: PrintPayload = (payload) => console.log(payload);

// Receives the action and the product title, passing it on to the other functions to complete the buttonAction sequence

export const logPayload: LogPayload = (action, title) => {
    printPayload(assignPayload(action, handlePayload(title)) as unknown as Message);
};
