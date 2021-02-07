import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box width="100%" position="absolute" height={16} bottom={0} textAlign="center">
            <p><strong>SharedMP3</strong> - Baixar músicas Grátis &copy; {new Date().getFullYear()} </p>
            <p>To report any copyright infringement, please email us at: <Link href="mailto:dmca@sharedmp3.com.br" color="blue.500" isExternal>dmca@sharedmp3.com.br</Link></p>
        </Box>
    )
}

export default Footer
