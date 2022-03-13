import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  MenuItem,
  Box,
  Button,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { CheckIcon } from "@chakra-ui/icons";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Feature = ({ text, icon, iconBg, title }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>

      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const features = [
  { title: "ACCESS TO LINKEDIN LEARNING WITH 14,000 COURSES" },
  { title: "125 HRS VIRTUAL INTERNSHIP WITH TCS ION" },
  { title: "100% PLACEMENT ASSISTANCE GUARANTEE*" },
  { title: "AVAILABILITY OF BADGES FROM AWS" },
  {
    title:
      "INTERNATIONAL READINESS PROGARM INCLUDES IELTS, CROSS-CULTURE TRAINING",
  },
  { title: "INDUSTRY GRADE CERTIFICATION" },
  {
    title:
      "INTERNATIONAL READINESS PROGARM INCLUDES IELTS, CROSS-CULTURE TRAINING",
  },
  { title: "TRAINING METHODOLOGY USING PERL MODEL" },
];

function SingleCourse({ match, history }) {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  let courseId = useParams();

  const handleOnClick =
    () => navigate("/registerScreen?course=" + title, { replace: true });

  const dispatch = useDispatch();

  const fetching = async () => {
    const { data } = await axios.get(`/api/cource/${courseId.id}`);

    setTitle(data.title);
    setDescription(data.Description);
    setDate(data.updatedAt);
  };

  useEffect(() => {
    fetching();
  }, [courseId.id, date]);

  return (
    <div>
      <Navbar />
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/11/03/file7d0vu1q6fvl16n4wzgzf-910795-1604404830.jpg?itok=9qcBU-Ob)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"yellow"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              {title}
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
                onClick={handleOnClick}
              >
                Apply Now
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>About the course</Heading>
            <Text textAlign={"left"} fontSize={"lg"}>
              {Description}
            </Text>
            <Heading>Objectives</Heading>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Familiarize Express application framework."}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Develop, deploy and secure advanced web applications."}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"To understand the best practices and principles."}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ka5avkYJ0VNRQx426LKmYxoyWetts_D21w&usqp=CAU)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>COURSE HIGHLIGHTS</Heading>
          </Stack>

          <Container maxW={"6xl"} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {features.map((feature) => (
                <HStack key={feature.id} align={"top"}>
                  <Box color={"Red.1000"} px={2}>
                    <Icon as={CheckIcon} color="green" />
                  </Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600}>{feature.title}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
      <Footer />

    </div>
  );
}

export default SingleCourse;
