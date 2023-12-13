import { FormControl, Input, Box } from "@chakra-ui/react"
import { useState } from "react"
import { SearchIcon } from '@chakra-ui/icons'

const SearchForm = (props: any) => {
  const [query, setQuery] = useState<string>("")
  const searchHandler = (event: React.FormEvent) => {
    event.preventDefault()
    props.searchFn(query)
  }
  return (
    <>
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
          <Input
            type='text'
            border="0"
            variant='unstyled'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FormControl>
      </Box>
    </>
  )
}

export default SearchForm