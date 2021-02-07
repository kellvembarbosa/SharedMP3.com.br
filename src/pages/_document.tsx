import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react'
import theme from './_theme'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" >
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}