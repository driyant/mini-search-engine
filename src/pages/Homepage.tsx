import { Box, Heading, Input, FormControl, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage: React.FC = () => {

  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState<string>("")

  const searchHandler = (event: React.FormEvent): void => {
    event.preventDefault()
    navigate(`/search?q=${searchQuery}&cat=web`)
  }

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify([]));
  }, [])

  return (
    <>
      <Box as="section" height="90vh" width="80%" display="flex" justifyContent="center" alignItems="center" flexFlow="column" textAlign="center">
        <Box width="80%">
          <Heading as="h1" marginBottom="2rem">Mini Search Engine</Heading>
          <Box
            as="form"
            onSubmit={searchHandler} 
            width="100%"
            height="44px" 
            borderRadius="20px" 
            border="1px solid #d1d1d1" 
            display="flex" alignItems="center" 
            justifyContent="space-between" 
            flexFlow="row" 
            p="1rem"
            boxShadow='base'
            data-testid='search-box'
            >
            <SearchIcon boxSize={5} mr="1rem" color="gray.500" />
            <FormControl>
              <Input type='text' border="0" variant='unstyled' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box as='footer'>
        <Text>&copy; DRIYANT - {new Date().getFullYear()}</Text>
      </Box>
    </>
  )
}

export default Homepage