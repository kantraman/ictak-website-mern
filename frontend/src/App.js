import { Flex } from '@chakra-ui/react';
import Carousalcontainer from './components/Carousalcontainer';
import Scroll from './components/Scroll';
import CounterCard from './components/CounterCard';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Videocard } from './components/Videocard/Videocard';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Flex>
   <Carousalcontainer/>
   
    </Flex>
    <Scroll/>
    <CounterCard/>
    <Videocard/>
    <Footer/>
</div>
  );
    
}

export default App;
