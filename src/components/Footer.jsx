import React from 'react'
import {Text, Flex, Link, UnorderedList, ListItem, Box, Image, List} from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"

const Footer = () => {
  return (
    <Flex fontFamily="'Roboto', sans-serif" justifyContent="space-between" mt="100px" p="2em" bg="#e0ffcd" W="100%" h="250px" alignItems="center">
        <Box>
            <Text fontWeight={600} ml="15px">Contact</Text>
            <UnorderedList listStyleType="none">
                <ListItem>No. 14 Kanta Road</ListItem>
                <ListItem>off Independence Way, Kaduna</ListItem>
                <ListItem>07016612207</ListItem>
                <ListItem>info@kadhublibrary.com</ListItem>
            </UnorderedList>
        </Box>
        <Box textAlign="center">
            <Text fontWeight={600} mb="15px">Social</Text>
            <List listStyleType="none" display="flex">
                <Link mr="15px"><Image src="facebook.png" alt="facebook-icon" /></Link>
                <Link mr="15px"><Image src="instagram.png" alt="instagram-icon" /></Link>
                <Link><Image src="telegram.png" alt="telegram-icon" /></Link>
            </List>
        </Box>
        <Box>
            <Text fontWeight={600} ml="15px">Site Links</Text>
            <UnorderedList listStyleType="none">
                <ListItem> <Link as={ReachLink} to="/">Home</Link></ListItem>
                <ListItem> <Link as={ReachLink} to="/about">About</Link></ListItem>
                <ListItem> <Link as={ReachLink} to="/contact">Contact</Link></ListItem>
                <ListItem> <Link as={ReachLink} to="/login">Login</Link></ListItem>
            </UnorderedList>
        </Box>
    </Flex>
  )
}

export default Footer