import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm";


const SearchResult: React.FC = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")
  const cat = searchParams.get("cat")
  const [category, setCategory] = useState<string | null>(cat || "" )
  const [searchParam, setSearchParams] = useState<string | null>(q || "" )
  useEffect(() => {
    
  }, [])
  return (
    <Box 
      as="section" 
      padding="1rem 1rem 2rem 1rem" 
      width="100%"
      display="flex" 
      justifyContent="center" 
      flexFlow="column"
    >
      <Box>
        <Link to="/">
          <Heading as="h3" size="lg">Mini Search Engine</Heading>
        </Link>
      </Box>
      <Box>
        <SearchForm />
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Box
          as={Link}
          to="/"
          border="0.1px solid #9c9c9c"
          height="40px"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#444444"
          borderRadius="18px"
          transition="0.5s ease"
          _hover={{
            color: "white",
            backgroundColor: "#5c5c5c",
            border: "none"
          }}
          fontWeight="medium"
        >
          Bookmark
        </Box>
        <Button
          height="40px"
          width="100%"
          border="0.1px solid #9c9c9c"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textDecoration="none"
          color="#444444"
          borderRadius="18px"
          transition="0.5s ease"
          fontSize="0.775rem"
          letterSpacing="2px"
          backgroundColor="white"
          cursor="pointer"
          variant="outline"
          _hover={{
            color: "white",
            backgroundColor: "#5c5c5c",
            border: "none"
          }}
          fontWeight="medium"
        >Clear Bookmark</Button>
      </Box>
    </Box>
  )
}

export default SearchResult