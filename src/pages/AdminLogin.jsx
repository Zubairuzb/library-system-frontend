import React, { useState } from "react";
import adminLogin from "../assets/admin_login.png";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";
import Axios from "axios";
import { useSession } from "../components/admin/AdminSessionContext";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
  Select,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const {setAdminSessionData} = useSession();

  const [failureMessage, setFailureMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values) {
        Axios.post(
          "http://localhost/library_information_system/backend/api/login_admin.php",
          values
        )
          .then((res) => {
            resetForm();
            console.log(res.data);
            if (res.data.failure !== undefined) {
              setFailureMessage(res.data?.failure);
              navigate("/admin");
              toast.error(res.data?.failure, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              console.log(res.data.failure);
            } else {
              navigate("/admindashboard");
              console.log(res.data);
              setAdminSessionData(res.data);
            }
          })
          .catch((error) => {
            navigate("/admin");
            console.log("Error registering", error);
          });
      }
    },
  });

  const navigate = useNavigate();
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

    <Flex bg="gray.100" align="center" justify="center" h="100vh" w="100%">
      <Box
        bg="white"
        p={10}
        roundedTopLeft="md"
        roundedBottomLeft="md"
        w="25%"
        h="60vh"
      >
        
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl mt="20px">
              <FormLabel htmlFor="email">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full" mt="20px">
              Admin Login
            </Button>
          </VStack>
        </form>
      </Box>
      <Box bg="white" rounded="md" w="25%" h="60vh">
        <Image
          opacity="0.8"
          src={adminLogin}
          w="100%"
          h="100%"
          alt="register-image"
          roundedTopRight="md"
          roundedBottomRight="md"
        />
      </Box>
    </Flex>
    </>
  );
};

export default AdminLogin;
