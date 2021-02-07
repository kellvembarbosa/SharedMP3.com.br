import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Fade, Flex, Input, ScaleFade } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { isError } from 'util'
import Main from '../components/Layout/Main'
import Seo from '../components/Layout/Seo'

export default function Home() {
  <style jsx global>
    {`
    .logo-site {
      margin-top: 120px!important;
    }
  `}
  </style>
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isOpen, setOpen] = React.useState(false);
  const [inputSearchValue, setInputSearchValue] = React.useState('')
  const [searchKey, setSearchKey] = React.useState('')

  React.useEffect(() => {
    setOpen(true);
  })


  const handlerSearchBtn = () => {

    if (inputSearchValue.length <= 0) {
      showError('O campo de pesquisa não pode ficar em branco!');
      return;
    }

    setLoading(true);
    setSearchKey(inputSearchValue);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }


  function showError(message: string) {
    setError(true);
    setErrorMessage(message);
    setTimeout(() => setError(false), 2000);
  }

  return (
    <Main >
      <Seo title="Baixar Músicas Grátis - Shared MP3" />
      <Box position="absolute" top="25%" marginBottom={16} width="100%" flexDirection="column" textAlign="center">
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box width={["90%", "70%", "60%", "50%"]} margin="0 auto">

            <Image
              className="logo-site"
              src="/img/logo-big.png"
              alt="Baixar Músicas Grátis - Shared MP3"
              width={567}
              height={160} />

            <Flex flexDirection="row" mt={8}>

              <Input value={inputSearchValue} onChange={(e) => setInputSearchValue(e.target.value)} placeholder="Pesquise uma música" flex="1" size="lg" marginRight={4} disabled={loading} />
              <Button colorScheme="blue" size="lg" pl={6} pr={6} isLoading={loading} onClick={() => handlerSearchBtn()}> <Search2Icon /> </Button>
            </Flex>
            <Fade in={error}>
              <Box
                p={2}
                color="white"
                mt="4"
                bg="red.400"
                rounded="md"
                shadow="md">
                {errorMessage}
              </Box>
            </Fade>
          </Box>
        </ScaleFade>
      </Box>

    </Main>
  )
}
