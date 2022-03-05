import "./App.css";
import Cources from "./cources/Cources";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCource from "./cources/CreateCource";
import UpdateCource from "./cources/UpdateCource";
import SingleCourse from "./cources/SingleCourse";
import RegisterScreen from "./components/registerScreen/RegisterScreen";
import Contact from './components/contact us/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/contact us/Contact.css';
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
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/cources" element={<Cources />} />
          <Route path="/CreateCource" element={<CreateCource />} />
          <Route path="/cource/:id" element={<UpdateCource />} />
          <Route path="/singlecourse/:id" element={<SingleCourse />} />
          <Route path="/registerScreen" element={<RegisterScreen />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
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
