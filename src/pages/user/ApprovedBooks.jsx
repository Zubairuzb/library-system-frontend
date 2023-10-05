import React, { useEffect } from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import Axios from 'axios';
import { useSession } from "../../components/SessionCotext";

const ApprovedBooks = () => {

  //get user login state data
 const {sessionData} = useSession();

  //check if user is not login 
  useEffect(() => {
    if (Object.keys(sessionData).length === 0) {
      navigate("/login");
      console.log(sessionData);
    }
  }, []);

  return (
    <Flex>
      Approved Books
    </Flex>
  );
};

export default ApprovedBooks;
