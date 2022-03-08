import React from 'react'
import { Flex } from '@chakra-ui/react';
import Carousalcontainer from './Carousalcontainer';
import Scroll from './Scroll';
import CounterCard from './CounterCard';
import './App1.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Videocard } from './Videocard/Videocard';
import { Students } from './Students/Students';
import TechPartners from './memberPage/TechPartners';
import { Knowledgepartner } from './Knowledge/Knowledgepartner';

export const Mainpage = () => {
  return (
    <div>
    <Navbar/>
    <Flex>
   <Carousalcontainer/>
   
    </Flex>
    <Scroll/>
    <CounterCard/>
    <Videocard/>
    <Students/>
    <TechPartners/>
    <Knowledgepartner/>
    <Footer/>
    </div>
  )
}
