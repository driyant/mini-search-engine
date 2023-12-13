import { Box, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

const Homepage: React.FC = () => {

  const navigate = useNavigate()

  
  const searchFn = (params: string): void => {
    navigate(`/search?q=${params}&cat=web`)
  }

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify([]));
  }, [])

  return (
    <>
      <Box as="section" height="90vh" width="80%" display="flex" justifyContent="center" alignItems="center" flexFlow="column" textAlign="center">
        <Box width="80%">
          <Heading as="h1" marginBottom="2rem">Mini Search Engine</Heading>
          <SearchForm searchFn={searchFn}/>
        </Box>
      </Box>
      <Box as='footer'>
        <Text>&copy; driyant - {new Date().getFullYear()}</Text>
      </Box>
    </>
  )
}

export default Homepage