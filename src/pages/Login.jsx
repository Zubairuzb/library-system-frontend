import { useEffect, useState } from "react";
import { useSession } from "../components/SessionCotext";
import LoginImage from "../assets/login_image2.png";
import { useNavigate, useLocation, Link as ReachLink } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";
import Axios from "axios";
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
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { setSessionData } = useSession();
  const [failureMessage, setFailureMessage] = useState("");

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [message]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values) {
        Axios.post(
          "http://localhost/library_information_system/backend/api/login_user.php",
          values
        )
          .then((res) => {
            resetForm();

            console.log(res.data);
            if (res.data.failure !== undefined) {
              navigate("/login");
              setFailureMessage(res.data.failure);
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
            } else {
              setSessionData(res.data);
              console.log("Session data set successfully");

              // navigate("/userdashboard", {
              //   replace: true,
              //   state: { message: res.data.fullname },
              // });
              navigate("/userdashboard");
            }
          })
          .catch((error) => {
            console.log("Error registering", error);
            navigate("/login");
          });
      }
    },
  });

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

      {message && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={1}
        />
      )}
      <Flex bg="gray.100" align="center" justify="center" h="100vh" w="100%">
        {/* <SuccessSessionData /> */}

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
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
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
                />
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" mt="20px">
                Login
              </Button>
              <Text mt="20px">
                Don't have an account?{" "}
                <Link as={ReachLink} to="/register" color=" #4ef037">
                  Register
                </Link>
              </Text>
            </VStack>
          </form>
        </Box>
        <Box bg="white" rounded="md" w="25%" h="60vh">
          <Image
            opacity="0.5"
            src={LoginImage}
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

export default Login;
