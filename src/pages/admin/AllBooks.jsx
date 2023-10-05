import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link as ReachLink} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react";

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    Axios.get(
      "http://localhost/library_information_system/backend/api/admin/all_books.php",  { responseType: 'json' }
    )
      .then((res) => {
        console.log(res.data);
        console.log("Sussessfull");
        setBookData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(Array.isArray(bookData));

  if (bookData === undefined) {
    return <Text>Loading</Text>;
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
              </Tr>
            </Thead>

            {Array.isArray(bookData) && bookData.map((item) => {
              return (
                <Tbody>
                  <Tr>
                    <Td w="10px">{item.author}</Td>
                    <Td w="17px">{item.title}</Td>
                    <Td>{item.isbn}</Td>
                    <Td>{item.year}</Td>
                    <Td>{item.status}</Td>
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
