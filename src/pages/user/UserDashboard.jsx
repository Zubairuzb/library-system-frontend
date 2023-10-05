import React, { useState, useEffect } from "react";
import { useSession } from "../../components/SessionCotext";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import {
  Link as ReachLink,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Axios from "axios";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const userDashboard = () => {
  const { sessionData } = useSession();

  useEffect(() => {
    if (sessionData.success) {
      toast.success(sessionData.success, {
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
  }, [sessionData.success]);

  const [addBookStatus, setAddBookStatus] = useState("");

  const location = useLocation();
  const message = location.state?.message;
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(sessionData).length === 0) {
      navigate("/login");
      console.log(sessionData);
    }
  }, []);

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
      <Sidebar />
      <Box backgroundColor="#e0ffcd" h="auto" w="88%">
        <Box display="flex" justifyContent="space-between" m="15px 20px">
          <Text fontSize="1.5em" color="#240747">
            User Dashboard
          </Text>
          {sessionData.fullname && (
            <Text
              backgroundColor="#240747"
              color="white"
              width="220px"
              borderRadius="15px"
              textAlign="center"
              fontSize="1.2em"
            >
              {sessionData.fullname} - User Id: {sessionData.user_id}
            </Text>
          )}
        </Box>
        <Box textAlign="center">
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

export default userDashboard;
