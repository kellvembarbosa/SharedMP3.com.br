import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Link, Spacer, useColorMode } from '@chakra-ui/react'
import React from 'react'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header>
            <Flex color="white" width="100%" fontWeight="bold" h="40px" bgGradient="linear(blue.400, blue.600)" alignItems="center" justifyContent="center">
                <Link ml={4} >Home</Link>
                <Spacer />
                <Breadcrumb separator="-" marginRight={4}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
            <Button onClick={toggleColorMode} mt={3} mr={2} float="right">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </header >
    )
}

export default Header
