import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="es">
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
