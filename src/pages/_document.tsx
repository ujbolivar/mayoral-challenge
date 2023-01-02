import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = (): JSX.Element => {
    return (
        <Html>
            <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    };
    
    export default MyDocument;
    