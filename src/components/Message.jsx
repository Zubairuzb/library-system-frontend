import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex, Input, Heading, Box, Textarea
} from '@chakra-ui/react'

const Message = () => {
    return (
        <Box mt="0px">
            <Heading as="h3" size="lg" textAlign="center" m="20px" color="#240747">Send Us a Message</Heading>
            <form>
            <Flex w="60%" m="auto" flexWrap="wrap">
                <FormControl isRequired w="45%" mr="5%">
                    <FormLabel>Surname</FormLabel>
                    <Input type='text' />
                </FormControl>
                <FormControl isRequired w="45%">
                    <FormLabel>Firstname</FormLabel>
                    <Input type='text' />
                </FormControl>
                <FormControl isRequired w="95%" mt="30px">
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                </FormControl>
                <Textarea h="120px" w="95%" mt="30px" placeholder='Write a message here' />
                <FormControl isRequired w="95%" mt="30px">
                    <Input type='submit' value="Send" bg="#240747" color="#fff" fontSize="1.3em" />
                </FormControl>
            </Flex>
            </form>
        </Box>
    )
}

export default Message