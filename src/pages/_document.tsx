import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
    // initialColorMode: "light",
    useSystemColorMode: true,
    styles: {
        global: {
            "html": {
                height: "100%",
            },
            "body": {
                fontSize: "sm",
                color: "gray.600",
                lineHeight: "tall",
                minHeight: "100%",
                width: "100%",
            },
            a: {
                color: "teal.500",
            },
        },
    },
}

const theme = extendTheme({ config })

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