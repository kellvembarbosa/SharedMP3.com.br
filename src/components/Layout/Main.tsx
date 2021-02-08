import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Main({ children }) {
    return (
        <Flex flexDirection="column" minHeight="100vh">
            <Header />
            {children}
            <Footer />
        </Flex>
    )
}

export default Main
