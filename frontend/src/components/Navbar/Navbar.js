import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import Contact from '../contact us/Contact';
import {
  Box,
  Stack,
  Link,
  Flex,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { BiLogInCircle } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Login from '../Admin/Login';

function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  
  return (
    <Flex
      as="nav"
      borderRadius={15}
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={2}
      bg="grey"
      color="white"
     
     

      {...props}
    >
      <Flex align="center" mr={5}>
        {/* <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Chakra UI
        </Heading> */}
        <Link href='/'><Image boxSize='50px'
          objectFit='cover'
          src={Logo}
          alt='Dan Abramov'
        /></Link>
      </Flex>

      < Box display={{ base: "block", md: "none" }} marginLeft='10%' onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        marginLeft='5%'
      >
        <Menu>
          <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
            Home
          </MenuButton>
          <MenuList>
            <Link href='/aboutus'><MenuItem color='black'>About Us</MenuItem></Link>
    
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
            Courses
          </MenuButton>
          <MenuList>
            <Link href='/cource/:id'> <MenuItem color='black'>Certified Specialist in Full Stack Development</MenuItem></Link>
            <Link href='/cource/:id'> <MenuItem color='black'>Certified Specialist in Data Science and Analytics</MenuItem></Link>
            <Link href='/cource/:id'> <MenuItem color='black'>Cyber Security Analyst</MenuItem></Link>
            <Link href='/cource/:id'> <MenuItem color='black'>Robotic Process Automation</MenuItem></Link>
            <Link href='/cource/:id'> <MenuItem color='black'>Testing</MenuItem></Link>
            <Link href='/cource/:id'> <MenuItem color='black'>Digital Marketing</MenuItem></Link>
            <Link href='/cource/:id'> <MenuItem color='black'>Other Courses</MenuItem></Link>
    
          </MenuList>
        </Menu>

        <Menu>
          <Link href='/partnership'> <MenuButton color='black' as={Button} >
            Partnership
          </MenuButton></Link>
  
        </Menu>
        <Menu>
          <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
            Membership
          </MenuButton>
          <MenuList>
            <Link href='/academic-member'><MenuItem color='black'>Academic Membership</MenuItem></Link>
            <Link href='/corporate-member'><MenuItem color='black'>Corporate Membership</MenuItem></Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
            Events
          </MenuButton>
          <MenuList>
            <Link href='/techathlon'><MenuItem color='black'>Techathlon</MenuItem></Link>
            <Link href='/Icset'><MenuItem color='black'>Icset</MenuItem></Link>
          </MenuList>
        </Menu>
        <Menu>
          <Link href='https://retail.ictkerala.org/' target='_blank'>
            <MenuButton color='black' as={Button} >
              Paatshala
            </MenuButton></Link>
  
        </Menu>
        <Menu>
          <Link textDecor='none' href="/Contact"><MenuButton color='black' as={Button}   >
            Contact Us
          </MenuButton></Link>
  

        </Menu>
        <Menu>
          <Link href='https://ictkerala.zohorecruit.com/jobs/Careers' target='_blank'><MenuButton color='black' as={Button} >
            Careers
          </MenuButton></Link>

  
        </Menu>
        <Menu>
        <Link href='/login' target='_blank'>
          <MenuButton backgroundColor='blue.400' color='black' as={Button} border='1px'>
            Login
            <BiLogInCircle />
          </MenuButton>
          </Link>
        </Menu>
        
        
      </Stack>

      
    </Flex>
    
  );
};
export default Navbar;