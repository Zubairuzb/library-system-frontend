import React from 'react'
import {Flex, Text, Link as ReachLink} from '@chakra-ui/react'
import {Link} from 'react-router-dom' 
const Error = () => {
  return (
    <Flex
    justifyContent="center"
    alignItems="center"
    h="100vh"
    flexDirection="column"
    >
        <Text
        fontSize="8xl"
        fontWeight="700"
        >404</Text>
        <Text
        color="#f00"
        fontWeight="700"
        fontSize="1.2em"
        >Page not found</Text>
        <Link as={ReachLink} to="/" >Home</Link>
    </Flex>
    
  )
}

export default Error