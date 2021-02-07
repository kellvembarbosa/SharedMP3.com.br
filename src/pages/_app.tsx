import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

function App({ Component, pageProps }) {
  return <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default App
