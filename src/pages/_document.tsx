import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
    return (
        <Html lang="es">
            <Head>
                <Script src="https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js"></Script>
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
