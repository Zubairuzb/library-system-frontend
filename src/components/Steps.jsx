import React from 'react'
import {Box, Image, Flex, Text, Heading} from '@chakra-ui/react'

const Steps = () => {
  return (
    <>    
    <Heading as="h1" size="lg" mt="150px" ml="80px" textAlign="center">Get Started in few steps</Heading>
    <Flex flexWrap="wrap" w="100%" justifyContent="space-around" m="30px 40px">
        <Box w="25%" h="350px" p="20px" borderRadius="20px" color="#000" textAlign="center">
            {/* <Image src="digital-library.png" width="60px" alt="library-icon" float="center" /> */}
            <Heading as="h2" size="lg" color="#eb2632">Step: 1</Heading>
            <Heading as="h3" size="md" mt="15px" mb="12px" color="#240747"> Search and Discover</Heading>
            <Text>Begin your journey by accessing our intuitive book search feature. Enter keywords, author names, or book titles to find the books you desire. Our system will present you with a curated list of results matching your search criteria</Text>
        </Box>
     
        <Box w="25%" h="350px" p="20px" borderRadius="20px" color="#000" textAlign="center">
            {/* <Image src="digital-library.png" width="60px" alt="library-icon" float="center" /> */}
            <Heading as="h2" size="lg" color="#eb2632">Step: 2</Heading>
            <Heading as="h3" size="md" mt="15px" mb="12px" color="#240747">Borrow with Ease</Heading>
            <Text>Once you've found your desired book, borrowing is a breeze. Simply click on the "Borrow" button, and the book will be added to your virtual bookshelf. Monitor your borrowed books, due dates, and renew items conveniently from your account.</Text>
        </Box>

        <Box w="25%" h="350px" p="20px" borderRadius="20px" color="#000" textAlign="center">
            {/* <Image src="digital-library.png" width="60px" alt="library-icon" float="center" /> */}
            <Heading as="h2" size="lg" color="#eb2632">Step: 3</Heading>
            <Heading as="h3" size="md" mt="15px" mb="12px" color="#240747">Engage in Community Discussions</Heading>
            <Text>Join our vibrant community of book enthusiasts. Share your thoughts, write book reviews, and rate your reads. Connect with like-minded individuals and participate in engaging literary discussions, creating a shared space for exploring the world of books.</Text>
        </Box>
    </Flex>
    </>

  )
}

export default Steps;