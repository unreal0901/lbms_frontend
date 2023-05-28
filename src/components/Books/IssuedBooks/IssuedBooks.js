import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useGetStudentBooksQuery } from "../../../services/api/BookApi";
import { getStudentBook } from "../../../features/books/BookSlice";
import BooksIssuedDrawer from "./BooksIssuedDrawer";
import UsedBooksDrawer from "./UsedBooksDrawer";
import { ThreeCircles } from "react-loader-spinner";

const IssuedBooks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isUsedOpen,
    onOpen: onUsedOpen,
    onClose: onUsedClose,
  } = useDisclosure();
  const { isLoading } = useGetStudentBooksQuery();
  const studentBooks = useSelector(getStudentBook);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowMore = (book) => {
    setSelectedBook(book);
    onOpen();
  };

  const handleClose = () => {
    setSelectedBook(null);
    onClose();
  };

  const handleShowMoreUsed = (book) => {
    setSelectedBook(book);
    onUsedOpen();
  };

  const handleCloseUsed = () => {
    setSelectedBook(null);
    onUsedClose();
  };

  if (isLoading) {
    return (
      <div className="relative w-full h-[100vh]">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ThreeCircles
            height="100"
            width="100"
            color="#805AD5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      </div>
    );
  }

  return (
    <Box p={4}>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={4}>
        <GridItem>
          <Box borderWidth={1} borderRadius="md" p={4} background="white">
            <HStack justifyContent="center" mb={4} width="100%">
              <Tag
                colorScheme="purple"
                alignSelf="center"
                size="lg"
                variant="solid"
              >
                Issued Books
              </Tag>
            </HStack>
            {studentBooks?.issuedBooks?.length ? (
              <Box display="flex" flexWrap="wrap" gap="5">
                {studentBooks?.issuedBooks?.map((book) => (
                  <Box
                    key={book._id}
                    mb={4}
                    borderWidth={1}
                    borderRadius="md"
                    boxShadow="md"
                    overflow="hidden"
                    w="250px"
                  >
                    <Image
                      src={book.book.image}
                      alt={book.book.title}
                      objectFit="contain"
                      margin="auto"
                      h="200px"
                    />
                    <Box
                      p={2}
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Text
                        fontSize="lg"
                        textAlign="center"
                        fontWeight="bold"
                        mb={2}
                      >
                        {book.book.title}
                      </Text>
                      <Text mb={2}>{book.book.author}</Text>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        onClick={() => handleShowMore(book)}
                      >
                        Show More Info
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Text textAlign="center">Issue Book First</Text>
            )}
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth={1} borderRadius="md" p={4} background="white">
            <HStack justifyContent="center" mb={4} width="100%">
              <Tag
                colorScheme="purple"
                alignSelf="center"
                size="lg"
                variant="solid"
              >
                Used Books
              </Tag>
            </HStack>
            {studentBooks?.booksUsed?.length ? (
              <Box display="flex" flexWrap="wrap" gap="5">
                {studentBooks?.booksUsed?.map((book) => (
                  <Box
                    key={book._id}
                    mb={4}
                    borderWidth={1}
                    borderRadius="md"
                    boxShadow="md"
                    overflow="hidden"
                    w="250px"
                  >
                    <Image
                      height="200px"
                      src={book?.book?.image}
                      alt={book?.book?.title}
                      objectFit="contain"
                      margin="auto"
                    />
                    <Box
                      p={2}
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Text
                        fontSize="lg"
                        textAlign="center"
                        fontWeight="bold"
                        mb={2}
                      >
                        {book?.book?.title}
                      </Text>
                      <Text mb={2}>{book?.book?.author}</Text>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        onClick={() => handleShowMoreUsed(book)}
                      >
                        Show More Info
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Text textAlign="center">Issue Book First</Text>
            )}
          </Box>
        </GridItem>
      </Grid>

      {/* Drawer for Issued Books */}
      <BooksIssuedDrawer
        Open={isOpen}
        onClose={handleClose}
        book={selectedBook}
      />

      {/* Drawer for Used Books */}
      <UsedBooksDrawer
        Open={isUsedOpen}
        onClose={handleCloseUsed}
        book={selectedBook}
      />
    </Box>
  );
};

export default IssuedBooks;
