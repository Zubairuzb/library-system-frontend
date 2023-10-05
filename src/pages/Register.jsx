import registerImage from '../assets/register_image.png'
import { useNavigate, Link as ReachLink, useLocation } from 'react-router-dom'
import { Link, Text } from '@chakra-ui/react'
import Axios from 'axios'
import { useFormik } from "formik";
import { useState } from 'react'
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack, Image, Select
} from "@chakra-ui/react";

const Register = () => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            gender: "",
            level: "",
        },
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            // console.log(values);
            if (values) {
                Axios.post('http://localhost/library_information_system/backend/api/register_user.php', values)
                    .then(res => {
                        console.log("Server Response: ", res.data);
                        resetForm();
                        if (res.data.failure !== undefined) {
                            navigate('/register', { replace: true, state: { message: res.data.failure } });
                            console.log("Server Response: ", res.data);
                        } else {
                            navigate('/login', { replace: true, state: { message: res.data.success } });
                        }

                    })
                    .catch(error => {
                        console.log("Error registering", error)
                    })
            }
        }
    });

    const location = useLocation();
    const message = location.state?.message;

    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh" w="100%" boxSixing="border-box">
            <Box bg="white" p={6} roundedTopLeft="xl" roundedBottomLeft="xl" w="30%" h="87vh">
                {message && <Text color="red" textAlign="center">{message}</Text>}
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                        <FormControl>
                            <FormLabel htmlFor="fullname">Fullname</FormLabel>
                            <Input
                                id="fullname"
                                name="fullname"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                isRequired
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                isRequired
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                isRequired
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <Select name="gender" placeholder='Select Gender' value={formik.values.gender} onChange={formik.handleChange} isRequired>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Level</FormLabel>
                            <Select name="level" placeholder='Select Level' value={formik.values.level} onChange={formik.handleChange} isRequired>
                                <option value="100">100 level</option>
                                <option value="200">200 level</option>
                                <option value="300">300 level</option>
                                <option value="400">400 level</option>
                            </Select>
                        </FormControl>

                        <Button type="submit" colorScheme="purple" width="full">
                            Register
                        </Button>
                        <Text>Already registered? <Link as={ReachLink} to="/login" color=" #4ef037">Login here</Link></Text>
                    </VStack>
                </form>
            </Box>
            <Box bg="white" rounded="md" w="30%" h="87vh">
                <Image opacity="0.7" src={registerImage} w="100%" h="100%" alt="register-image" roundedTopRight="xl" roundedBottomRight="xl" />
            </Box>
        </Flex>
    );
}

export default Register;