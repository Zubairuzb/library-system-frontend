import React from 'react'
import {Box, Text, Flex, Link} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"

const NavBar = () => {
  return (
    <Flex fontFamily="'Roboto', sans-serif" justifyContent="space-around" w="100%" h="80px" mt="20px" color="#240747">
    <Box ml="60px" mr="auto" fontWeight="600">
        <Text>KadHub LIS</Text>
    </Box>
    <Box mr="40px" fontWeight="500">
        <Link as={ReachLink} mr="40px" to="/">Home</Link>
        <Link as={ReachLink} mr="40px" to="/about">About</Link>
        <Link as={ReachLink} mr="40px" to="/contact">Contact</Link>
        <Link as={ReachLink} bg="#eb2632" to="/login" color="#fff" p=".4em 1em" textAlign="center" borderRadius="30px" mr="40px">Login</Link>
        <Link as={ReachLink} bg="#eb2632" to="/admin" color="#fff" p=".4em 1em" textAlign="center" borderRadius="30px" mr="40px">Admin</Link>
    </Box>
    </Flex>
  )
}

export default NavBar