import React from 'react'
import { Flex, Image, Box, Badge, Text } from '@chakra-ui/react';
import imageUrl from '../../assets/images/ict-1.gif';
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
<Box>

    <Box maxW='sm' borderWidth='1px' marginLeft='20%' borderRadius='lg' overflow='hidden'>
      <Image src={imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          <Text>
          <ul>Government supported and Industry-led Program</ul>
<ul>Government scholarships and affordable fees model</ul>
<ul>One-stop shop for Students, Unemployed and Working professionals</ul>
          </Text>
         
        </Box>

        
      </Box>
    </Box>
  
    </Box>
    
  )
}


