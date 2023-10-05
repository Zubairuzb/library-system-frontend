import React from 'react'
import {Box, Flex, Heading, Button, Link } from '@chakra-ui/react'
import {Link as ReachLink} from 'react-router-dom'

const CallToAction = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center" w="80%" m="80px auto" borderRadius="30px" color="#fff" h="120px" bg="#240747">
        <Heading as="h2" size="lg">Get access to our large Catalog of Resources</Heading>
        <Button colorScheme='teal' variant='outline' size="lg" fontWeight="700">
        <Link as={ReachLink} to="/register">GET STARTED</Link>
        </Button>
    </Flex>
  )
}

export default CallToAction