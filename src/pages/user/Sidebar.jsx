import React, { useEffect } from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import Axios from 'axios';
import { useSession } from "../../components/SessionCotext";

const Sidebar = ({handleRedirectToAllBooks}) => {
  const navigate = useNavigate();
  const {sessionData} = useSession();

  if(!sessionData){
    navigate('/login')
  }
  
  const handleLogout = (e) =>{
    e.preventDefault();

    Axios.get('http://localhost/library_information_system/backend/api/logout_user.php')
    .then(res =>{
      console.log(res.data)
      if(res.data.success){
        navigate('/login')
      } 
      
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <Flex
      backgroundColor="#240747"
      color="#fff"
      h="auto"
      w="12%"
      flexDirection="column"
      p="20px"
    >
      <Link as={ReachLink} mt="15px" to="/userdashboard">
        Dashboard
      </Link>
      <Link as={ReachLink} mt="15px" to="allbooks">
        All Books
      </Link>
      <Link as={ReachLink} mt="15px" to="userrequests">
        My Requests
      </Link>
      <Link as={ReachLink} mt="15px" to="approvedbooks">
        Approved Books
      </Link>
      
      {/* <Link mt="15px" onClick={onOpen}>Add Book</Link> */}
      <Link mt="15px" href="" onClick={handleLogout}>
        Logout
      </Link>
    </Flex>
  );
};

export default Sidebar;
