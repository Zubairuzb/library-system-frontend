import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  VStack,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import {
  Link as ReachLink,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Axios from "axios";
import Sidebar from "./Sidebar";
import AllBooks from "./AllBooks";
import { useSession } from "../../components/admin/AdminSessionContext";

const AdminDashboard = () => {
  const { adminSessionData } = useSession();

  useEffect(() => {
    if (Object.keys(adminSessionData).length === 0) {
      navigate("/admin");
      console.log(adminSessionData);
    }
  }, []);



  //toast on success
  useEffect(() => {
    if (adminSessionData.success) {
      toast.success(adminSessionData.success, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        containerId: 'success'
      });
    }
  }, [adminSessionData.success]);
  
  const message = location.state?.message;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [addBookStatus, setAddBookStatus] = useState("");
  const [books, getBooks] = useState([]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      year: "",
    },
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
      if (values) {
        Axios.post(
          "http://localhost/library_information_system/backend/api/add_book.php",
          values
        )
          .then((res) => {
            onClose();
            console.log("Server Response: ", res.data);
            resetForm();
            if (res.data.failure !== undefined) {
              navigate("/admindashboard");
              setAddBookStatus(res.data.failure);
              console.log("Server Response: ", res.data.failure);
            } else {
              navigate("/admindashboard/allbooks");
              setAddBookStatus(res.data.success);
              console.log("Server Response: ", res.data.success);
            }
          })
          .catch((error) => {
            console.log("Error sendin data", error);
          });
      }
    },
  });

  return (
    <>
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
    <Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="author">Author</FormLabel>
                  <Input
                    id="author"
                    name="author"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="isbn">ISBN</FormLabel>
                  <Input
                    id="isbn"
                    name="isbn"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.isbn}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="isbn">Year of Publication</FormLabel>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.year}
                    isRequired
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Submit
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Sidebar />
      
      <Box backgroundColor="#e0ffcd" h="auto" w="88%">
        <Box display="flex" justifyContent="space-between" m="15px 20px">
          <Text fontSize="1.5em" color="#240747">
            Dashboard
          </Text>
          {adminSessionData.username && (
            <Text
              backgroundColor="#240747"
              color="white"
              width="220px"
              borderRadius="15px"
              textAlign="center"
              fontSize="1.2em"
            >
              Admin - {adminSessionData.username}
            </Text>
          )}
        </Box>
        <Box textAlign="center">
          <Button colorScheme="teal" onClick={onOpen}>
            ADD BOOK
          </Button>
          {addBookStatus && (
            <Text mt="10px" color="purple">
              {addBookStatus}
            </Text>
          )}
        </Box>
        <Outlet />
      </Box>
    </Flex>
    </>
  );
};

export default AdminDashboard;
