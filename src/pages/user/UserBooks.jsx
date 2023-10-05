import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link as ReachLink } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { useSession } from "../../components/SessionCotext";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react";

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);

  const { sessionData } = useSession();

  const handleRequest = (clickedBook) => {
    const shouldSendRequest = window.confirm("Are you sure you want to send a request?");

    if(shouldSendRequest){

      const bookId = clickedBook.book_id;
      const userId = sessionData.user_id;

    Axios.post(
      "http://localhost/library_information_system/backend/api/update_book_request.php",
      { bookId: bookId, userId: userId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log("updated successfully");
        console.log(res.data);
        alert("Request sent successfully")
      })
      .catch((error) => {
        console.log("failed to update");
        console.log(res.data);
      });
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    Axios.get(
      "http://localhost/library_information_system/backend/api/admin/all_books.php",
      { responseType: "json" }
    )
      .then((res) => {
        console.log("Sussessfull");
        setBookData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(Array.isArray(bookData));
  useEffect(() => {
    if (Object.keys(sessionData).length === 0) {
      navigate("/login");
      console.log(sessionData);
    }
  }, []);

  if (bookData.length === 0) {
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
                <Th>Author</Th>
                <Th>Title</Th>
                <Th>ISBN</Th>
                <Th>YEAR OF PUB.</Th>
                <Th> STATUS</Th>
                <Th>RESUEST</Th>
              </Tr>
            </Thead>

            {Array.isArray(bookData) &&
              bookData.map((item) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td w="10px">{item.author}</Td>
                      <Td w="17px">{item.title}</Td>
                      <Td>{item.isbn}</Td>
                      <Td>{item.year}</Td>
                      <Td>{item.status}</Td>
                      <Td background="#240747" color="#fff" borderRadius="20px">
                        <Link
                          as={ReachLink}
                          onClick={() => handleRequest(item)}
                        >
                          Send Request
                        </Link>
                      </Td>
                      {/* <Td><Link as={ReachLink}>Update</Link></Td>
                    <Td><Link as={ReachLink}>Delete</Link></Td> */}
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

export default AllBooks;
