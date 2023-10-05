import React from 'react'
import {Box, Image, Flex, Text, Heading} from '@chakra-ui/react'

const Features = () => {
  return (
    <>    
    <Heading as="h1" size="lg" mt="80px" ml="80px">Features</Heading>
    <Flex flexWrap="wrap" w="100%" justifyContent="space-around" m="30px 40px" fontFamily="'Roboto', sans-serif">
        <Box w="20%" h="350px" p="20px" bg="#240747" borderRadius="20px" color="#fff">
            <Image src="digital-library.png" width="60px" alt="library-icon" />
            <Heading as="h3" size="md" mt="15px" mb="12px">Digital Library Access Anywhere, Anytime</Heading>
            <Text>Embrace the freedom of accessing a vast digital library from the comfort of your device. Our Library Information System offers seamless access to e-books, audiobooks, and digital resources.</Text>
        </Box>
        <Box w="20%" h="350px" p="20px" bg="#e0ffcd" borderRadius="20px" color="#000">
            <Image src="ebook.png" width="60px" alt="library-icon" />
            <Heading as="h3" size="md" mt="15px" mb="12px">Seamless Book Search</Heading>
            <Text>Our Library Information System offers a powerful and intuitive book search functionality. Easily find your favorite books, academic resources, and research materials with just a few clicks. </Text>
        </Box>
        <Box w="20%" h="350px" p="20px" bg="#240747" borderRadius="20px" color="#fff">
            <Image src="open-book.png" width="60px" alt="library-icon" />
            <Heading as="h3" size="md" mt="15px" mb="12px">User-Friendly Borrowing and Renewal</Heading>
            <Text>Managing your borrowed books has never been easier. With our user-friendly borrowing and renewal feature, you can effortlessly check out books. </Text>
        </Box>
        <Box w="20%" h="350px" p="20px" bg="#e0ffcd" borderRadius="20px" color="#000" mr="40px">
            <Image src="read.png" width="60px" alt="library-icon" />
            <Heading as="h3" size="md" mt="15px" mb="12px">Interactive Book Reviews and Ratings</Heading>
            <Text>Connect with a community of avid readers through our interactive book review and rating system. Share your thoughts on books you've read, read reviews from others.</Text>
        </Box>
    </Flex>
    </>

  )
}

export default Features