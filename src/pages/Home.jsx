import React from 'react'
import { Box, Text, Link, Image, Flex, Heading } from "@chakra-ui/react"
import homepageImage from '../assets/homepage.svg'
import Features from '../components/Features'
import Steps from '../components/Steps'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Message from '../components/Message'
import {Link as ReachLink} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Flex w="100%" h="80vh" justifyContent="space-between" mt="40px">
    <Box ml="60px" w="35%" lineHeight={0}>
      <Heading as="h1" color="#240747" fontFamily="'PT Serif', sans-serif" fontWeight="400" fontSize="6em">KAD HUB</Heading>
      <Heading color="#4ef037" fontFamily="'PT Serif', sans-serif" fontWeight="700" fontSize="6em">LIBRARY</Heading>
      <Text mt="30px" mb="40px" fontFamily="'Roboto', sans-serif" fontWeight="600" lineHeight={2}>Unlock a World of Knowledge: Embark on a Literary Odyssey with Our Library Information System! Immerse Yourself in Captivating Stories, Access Digital Treasures, and Connect with a Community of Book Lovers. Start Your Adventure Today!</Text>
      <Link as={ReachLink} to="/register" bg="#eb2632" fontSize="1.1em" color="#fff" p=".4em 1em" textAlign="center" borderRadius="30px" mr="40px" fontWeight="600">GET STARTED</Link>
    </Box>
    <Box>
      <Image src={homepageImage} alt="Homepage Image" />
    </Box>
    </Flex>
    <Features />
    <Steps />
    <CallToAction />
    <Message />
    <Footer />
    </>
  )
}

export default Home;