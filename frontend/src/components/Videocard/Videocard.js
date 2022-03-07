import React from 'react'
import { Flex, Image, Box, Badge, Text } from '@chakra-ui/react';
import imageUrl from '../../assets/images/ict-1.gif';
import './aboutus.css'
export const Videocard = () => {
    const property = {
        
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Why to associate with us?',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
       
    }
  return (
   
        // Sample card from Airbnb
<Box  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' w='100%' p={4} display='flex'>

    <Box className='videotext' maxW='sm' borderWidth='1px' marginLeft='8%' borderRadius='lg' overflow='hidden'>
      <Image src={imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        

        <Box 
          mt='1'
          fontWeight='extrabold'
          as='h4'
          lineHeight='tight'
          isTruncated
          
        >
          {property.title}
        </Box>

        <Box >
          <Text>
          <ul>Government supported and Industry-led Program</ul>
<ul>Government scholarships and affordable fees model</ul>
<ul>One-stop shop for Students, Unemployed and Working professionals</ul>
          </Text>
         
        </Box>

        
      </Box>
    </Box>
    <Box className='aboutus'><Text fontFamily='sans-serif' fontSize='xx-large' padding={2} fontWeight='extrabold'>About Us</Text>
    <Text fontFamily='sans-serif' fontWeight='bold' textAlign='left' padding={2}>Who we are</Text><Box>We can support you to host an ICT Solution based on our immense experience in the domain. We can understand the unique requirements of clients and our well-experienced team will devote to generate the desired output.</Box>
    <Text fontFamily='sans-serif' fontWeight='bold' textAlign='left' padding={2}>Advisory Service</Text><Box>A range of consulting services provided by Certified Public Accountants (CPA) and other financial advisors to businesses and high net-worth individuals who require specialized advice on capital formation</Box>
    <Text fontFamily='sans-serif' fontWeight='bold' textAlign='left' padding={2}>Internship</Text><Box>The internship program strategies are very specific, measurable, realistic and fit well within the time framework and also showcases what the student hopes to learn from their experiences and the level of academic expectations that are expected!</Box>
    <Text fontFamily='sans-serif' fontWeight='bold' textAlign='left' padding={2}>Entrepreneurship Development</Text><Box>We improves the skills and knowledge of entrepreneurs through various training and classroom programs. The whole point of entrepreneurship development is to increase the number of professional entrepreneurs.</Box> </Box>
  
    </Box>
    
  )
}


