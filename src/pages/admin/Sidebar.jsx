import React, { useEffect } from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import Axios from 'axios';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const handleLogout = (e) =>{
    e.preventDefault();

    Axios.post('http://localhost/library_information_system/backend/api/admin/adminLogout.php')
    .then(res =>{
      console.log(res.data)
      if(res.data.success){
        navigate('/admin')
      }
    })
    .catch(error =>{
      console.log(error)
    })
  }



  console.log("Logout")

  return (
    <Flex
      backgroundColor="#240747"
      color="#fff"
      h="auto"
      w="12%"
      flexDirection="column"
      p="20px"
    >
      <Link as={ReachLink} mt="15px" to="/admindashboard">
        Dashboard
      </Link>
      <Link as={ReachLink} mt="15px" to="allbooks">
        All Books
      </Link>
      <Link as={ReachLink} mt="15px" to="borrowedbooks">
        Borrowed Books
      </Link>
      <Link as={ReachLink} mt="15px" to="borrowrequest">
        All Requests
      </Link>
      {/* <Link mt="15px" onClick={onOpen}>Add Book</Link> */}
      <Link mt="15px" href="" onClick={handleLogout}>
        Logout
      </Link>
    </Flex>
  );
};

export default Sidebar;
