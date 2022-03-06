import { Box } from '@chakra-ui/react'
import React from 'react'
import { Image,Text } from '@chakra-ui/react';
import back from '../../assets/images/aboutus.gif';
import './about.css';
export const AboutUs = () => {
  return (
    <div>
        <Box>
        <Image src={back} width='100%' height='130px'></Image>
        <Text padding={5} fontFamily='sans-serif' fontWeight='extrabold' fontSize='xx-large'>About Us</Text>
<Box className='ab'>
    <Text textAlign='left' marginLeft='15%'>
        <li>
        Government supported and Industry-led Program</li>
        <li>Government scholarships and affordable fees model</li>
        <li>One-stop shop for Students, Unemployed and Working professionals</li>
        
    </Text>
</Box>
        </Box>
    </div>
  )
}
