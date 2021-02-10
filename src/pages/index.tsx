import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, createStandaloneToast, Text, Fade, Flex, Input, Skeleton, Stack } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import Main from '../components/Layout/Main'
import Seo from '../components/Layout/Seo'
import { API } from '../services/api'

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
  const [searchList, setSearchList] = React.useState([])

  const [suggestions, setSuggestions] = React.useState([]);
  const [inputSearchValueOld, setinputSearchValueOld] = React.useState('');

  const toast = createStandaloneToast()

  React.useEffect(() => {
    setOpen(true);
  })

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handlerSearchBtn();
    }
  }

  const fetchSuggestions = async () => {
    console.log('new, old e input', inputSearchValue, inputSearchValueOld, (inputSearchValue.length - inputSearchValueOld.length))
    if (inputSearchValue.length > 5 && inputSearchValue.includes(' ') && (inputSearchValue.length - inputSearchValueOld.length) >= 4) {

      setinputSearchValueOld(inputSearchValue);

      const response = await API.get(`https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=youtube&q=${inputSearchValue}`)
      if (response.status === 200) {
        var listSuggestions = [];
        var body = response.data?.replace('window.google.ac.h(', '').replace('])', ']').replaceAll(',0', '');
        console.log(` before ${body}`);
        JSON.parse(body)[1].map(item => suggestions.push(item));
        console.log(listSuggestions.toString());
        setSuggestions([...suggestions]);
      }
    }
  }


  React.useEffect(() => fetchSuggestions, [inputSearchValue])

  const handlerSearchBtn = async () => {

    if (inputSearchValue.length <= 0) {

      // const playlist = await axios.get('http://aaii.tv/Jy4n0tb')

      // const result = parser.parse(playlist.data)
      // console.log(result)
      showError('O campo de pesquisa não pode ficar em branco!');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }


  function showError(message: string) {
    // setError(true);
    toast({
      title: "Campos necessários!",
      description: message,
      status: "error",
      position: "top-right",
      duration: 4000,
      isClosable: true,
    })

    // setErrorMessage(message);
    // setTimeout(() => setError(false), 2000);

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
              <Input value={inputSearchValue} list="suggests" onChange={(e) => setInputSearchValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Pesquise uma música" flex="1" size="lg" marginRight={4} disabled={loading} />

              <datalist id="suggests">
                {suggestions && suggestions.length > 0 && suggestions.map((item, index) => <option value={item} key={index} />)}
              </datalist>

              <Button colorScheme="blue" size="lg" pl={6} pr={6} isLoading={loading} onClick={() => handlerSearchBtn()}> <Search2Icon /> </Button>
            </Flex>

            <Box p={2} mt={4}>
              {loading && <Stack>
                <Skeleton colorScheme="green" height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>}

              {searchList && searchList.length > 0 && searchList.map((item, index) =>
                <Text key={index} fontSize="xl">{item.title}</Text>
              )}
            </Box>

          </Box>
        </Fade>
      </Box>

    </Main>
  )
}
