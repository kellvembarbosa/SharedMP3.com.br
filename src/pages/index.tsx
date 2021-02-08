import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Code, Fade, Flex, Input, ScaleFade } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Main from '../components/Layout/Main'
import Seo from '../components/Layout/Seo'
import parser from 'iptv-playlist-parser'
import axios from 'axios'


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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handlerSearchBtn();
    }
  }


  const handlerSearchBtn = async () => {

    if (inputSearchValue.length <= 0) {

      const playlist = await axios.get('http://aaii.tv/Jy4n0tb')

      const result = parser.parse(playlist.data)
      console.log(result)
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
      <Box position="absolute" top="25%" width="100%" flexDirection="column" textAlign="center">
        <Fade in={isOpen}>
          <Box width={["90%", "70%", "60%", "50%"]} margin="0 auto">

            <Image
              className="logo-site"
              src="/img/logo-big.png"
              alt="Baixar Músicas Grátis - Shared MP3"
              width={567}
              height={160} />

            <Flex flexDirection="row" mt={8}>
              <Input value={inputSearchValue} onChange={(e) => setInputSearchValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Pesquise uma música" flex="1" size="lg" marginRight={4} disabled={loading} />
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
        </Fade>
      </Box>

    </Main>
  )
}
