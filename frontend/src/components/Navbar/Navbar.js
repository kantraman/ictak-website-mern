import React from 'react';
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
 
  useDisclosure
} from "@chakra-ui/react";
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
        <Image boxSize='50px'
    objectFit='cover'
    src={Logo}
    alt='Dan Abramov'
  />
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
    <Link href='/aboutus'><MenuItem  color='black'>About Us</MenuItem></Link>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
  Courses
  </MenuButton>
  <MenuList>
    <MenuItem color='black'>Certified Specialist in Full Stack Development</MenuItem>
    <MenuItem color='black'>Certified Specialist in Data Science and Analytics</MenuItem>
    <MenuItem color='black'>Cyber Security Analyst</MenuItem>
    <MenuItem color='black'>Robotic Process Automation</MenuItem>
    <MenuItem color='black'>Testing</MenuItem>
    <MenuItem color='black'>Digital Marketing</MenuItem>
    <MenuItem color='black'>Other Courses</MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
   Services
  </MenuButton>
  <MenuList>
    <MenuItem color='black'>Our Vendors</MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color='black' as={Button} >
   Partnership
  </MenuButton>
  
</Menu>
        <Menu>
  <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
  Membership
  </MenuButton>
  <MenuList>
    <MenuItem color='black'>Academic Membership</MenuItem>
    <MenuItem color='black'>Corporate Membership</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
  Events
  </MenuButton>
  <MenuList>
    <MenuItem color='black'>Digital Workshop</MenuItem>
    <MenuItem color='black'>Intership</MenuItem>
    <MenuItem color='black'>Salesforce</MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color='black' as={Button} >
   Paatshala
  </MenuButton>
  
</Menu>
<Menu>
  <Link  textDecor='none' href="/Contact"><MenuButton  color='black' as={Button}   >
   Contact Us
  </MenuButton></Link>
  
</Menu>
<Menu>
  <MenuButton color='black' as={Button} >
   Careers
  </MenuButton>
  
</Menu>
        
      </Stack>

      
    </Flex>
  );
};
export default Navbar;