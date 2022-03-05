import React from "react";
import {Carousel} from 'react-bootstrap';
import image1 from '../assets/images/ict_one.jpg';
import image2 from '../assets/images/ict_two.jpg';
import image3 from '../assets/images/ict_three.jpg';
function Carousalcontainer() {
    return (
      <div style={{marginLeft:'10%',marginTop:'1%', width:'80%'}}>
     
     <Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-150"
      src={image1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
       
  </div>
    );
      
  }
  
  export default Carousalcontainer;