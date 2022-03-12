import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Button, Card, Form } from "react-bootstrap";
import { createCourceAction } from "../actions/courceActions";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from 'react-bootstrap';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import Topbar from '../components/Dashboard/topbar/Topbar';
import Sidebar from '../components/Dashboard/sidebar/Sidebar';
import { HamburgerIcon } from '@chakra-ui/icons';

function CreateCource({ a }) {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [courseError, setError] = useState(false);

  const dispatch = useDispatch();

  const courceCreate = useSelector((state) => state.courceCreate);
  const { loading, error, cource } = courceCreate;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  //Offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);

    dispatch(createCourceAction(title, Description));
    if (!title || !Description) {
      setError(true);
    } else {
      navigate("/Cources");
    }
  };

  useEffect(() => { }, []);

  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Topbar />
      <div className="d-grid w-100">
        <Button variant="solid" onClick={handleShow} className='d-flex align-items-center ml-4'>
          <HamburgerIcon /> Navigation
        </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Create a new cource</Heading>
                  {courseError && (
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="red.500">
                      failed to create course.
                    </Text>
                  )}
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                        {title}
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Title</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none" />
                          <Input
                            type="text"
                            size="md"
                            type="title"
                            value={title}
                            placeholder="Enter the title"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="name">
                        <FormLabel>Description</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          value={Description}
                          placeholder="Enter the Description"
                          rows={4}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={submitHandler}
                        >
                          Create Course
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default CreateCource;
