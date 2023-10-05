import React, { useEffect, useState } from "react";
import { Flex, Box, Text, TableContainer, Table, Tbody, Thead, Th, Tr, Td } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useSession } from "../../components/SessionCotext";

const UserRequests = () => {
  const [requestBooks, setRequestBooks] = useState([]);

  const navigate = useNavigate();

  const { sessionData } = useSession();
  //check if user is not login
  useEffect(() => {
    if (Object.keys(sessionData).length === 0) {
      navigate("/login");
      console.log(sessionData);
    }
  }, []);

  //get books requested by user
  let getRequestedBooks = () => {
    Axios.get(
      "http://localhost/library_information_system/backend/api/requested_books.php",
      {
        params: {
          user_id: sessionData.user_id,
        },
      }
    )
      .then((res) => {
        setRequestBooks(res.data.data);
        console.log(requestBooks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRequestedBooks();
  }, []);

  console.log(requestBooks);
  if (requestBooks.length === 0) {
    return (
      <Text textAlign="center" fontSize="2em">
        Loading
      </Text>
    );
  } else {
    return (
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>User ID</Th>
                <Th>Book Id</Th>
                <Th>Status</Th>
                <Th>Request Date</Th>
              </Tr>
            </Thead>

            {Array.isArray(requestBooks) &&
              requestBooks.map((item) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{item.user_id}</Td>
                      <Td>{item.book_id}</Td>
                      <Td>{item.status}</Td>
                      <Td>{item.created_at}</Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
      </Box>
    );
  }
};

export default UserRequests;
