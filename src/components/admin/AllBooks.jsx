import React from 'react'
import Axios from 'axios'
import {Text, Box, Flex} from '@chakra-ui/react'
import {useSession} from './AdminSessionContext'


const AllBooks = () => {
  const {adminSessionData} = useSession();

  useEffect(() => {
    if (Object.keys(adminSessionData).length === 0) {
      navigate("/admin");
      console.log(adminSessionData);
    }
  }, []);
  
  return (
    <Flex>AllBooks</Flex>
  )
}

export default AllBooks