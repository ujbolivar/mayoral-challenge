import { logPayload } from 'helpers/all_helpers';

describe('Prints a message to the console', () => {
    test.todo('Print a message to the console'),
        () => {
            const action = 'colores';
            const title = 'Zapatillas';
            const message = 'El usuario desea ver el producto Zapatillas en otros colores';
            expect(logPayload(action, title)).toStrictEqual(message);
        };
});
