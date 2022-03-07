import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import stud1 from '../../assets/images/stud1.jpeg';
import stud2 from '../../assets/images/stud2.jpeg';
import stud3 from '../../assets/images/stud3.jpeg';
import stud4 from '../../assets/images/stud4.jpg';
import './Students.css';
export const Students = () => {
  return (
    <div className='Studentsmain'>
    <Text padding={5} fontFamily='sans-serif' fontWeight='extrabold' fontSize='xxx-large'>TESTIMONIALS</Text>
<Box  w='100%' p={4} display='flex'>
            <Box height='10%' width='15%' padding={5} marginLeft='10%' >
                <img className="card-img-top"   src={stud1} height="380" alt="Card image cap"/>
                <Box className="product-detail">
                   
                   
                   <p>The teaching staff was really helpful when it comes to understanding the course and training. I expect more courses in the future and hope for continued support from ICTAK" </p>
                   
                    
                   </Box>
            </Box>
            <Box height='10%' width='15%' padding={5} marginLeft='5%'>
                <img className="card-img-top"   src={stud2} height="380" alt="Card image cap"/>
                <Box className="product-detail">
                   
                   
                   <p>DSA course, excellent classes and career support. </p>
                   
                    
                   </Box>
            </Box>
            <Box height='10%' width='15%' padding={5} marginLeft='5%' >
                <img className="card-img-top"   src={stud3} height="380" alt="Card image cap"/>
                <Box className="product-detail">
                   
                   
                   <p>Excellent organization, great assistance, and well-organized training. The trainers in the academy have literally handheld me during various situations, which has helped me a lot in creating a strong foundation in Data Science.</p>
                   
                    
                   </Box>
            </Box>
            <Box height='10%' width='15%' padding={5} marginLeft='5%' >
                <img className="card-img-top"   src={stud4} height="380" alt="Card image cap"/>
                <Box className="product-detail">
                   
                   
                   <p> It has been a wonderful journey with ICTAK. Ict helped me become Industry ready and achieve my goals. I recommend ICT to everyone out there, who wants to become a part of this new era of Tachnologies. </p>
                   
                    
                   </Box>
            </Box>
            
            </Box>
            
           
    </div>
  )
}
