import React from 'react'
import {
    Box,
    Image,
    Text,
  } from '@chakra-ui/react';
  import imageabout from '../../../assets/images/about.jpg';
export const AboutUs = () => {
  return (
    <div>
<Box >
<Image src={imageabout} alt={imageAlt}></Image>
</Box>
    </div>
  )
}
