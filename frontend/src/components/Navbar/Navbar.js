import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";

import {
  Box,
  Stack,
  Flex,
  Text,
  Button,
  Image,
  useDisclosure,
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
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { listCource } from "../../actions/courceActions";

function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const dispatch = useDispatch();
  const courceList = useSelector((state) => state.courceList);
  const { loading, cource, error } = courceList;

  useEffect(() => {
    dispatch(listCource());
  }, [dispatch]);

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
        <Image boxSize="50px" objectFit="cover" src={Logo} alt="Dan Abramov" />
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        marginLeft="10%"
        onClick={handleToggle}
      >
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        marginLeft="5%"
      >
        <Menu>
          <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}>
            Home
          </MenuButton>
          <MenuList>
            <MenuItem color="black">About Us</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}>
            Courses
          </MenuButton>
          <MenuList>
            {cource?.map((cource) => (
              <MenuItem key={cource._id} color="black">
                <a href={`/singlecourse/${cource._id}`}>{cource.title}</a>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}>
            Services
          </MenuButton>
          <MenuList>
            <MenuItem color="black">Our Vendors</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button}>
            Partnership
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}>
            Membership
          </MenuButton>
          <MenuList>
            <MenuItem color="black">Academic Membership</MenuItem>
            <MenuItem color="black">Corporate Membership</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}>
            Events
          </MenuButton>
          <MenuList>
            <MenuItem color="black">Digital Workshop</MenuItem>
            <MenuItem color="black">Intership</MenuItem>
            <MenuItem color="black">Salesforce</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button}>
            Paatshala
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button}>
            News
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton color="black" as={Button}>
            Careers
          </MenuButton>
        </Menu>
      </Stack>
    </Flex>
  );
}
export default Navbar;
