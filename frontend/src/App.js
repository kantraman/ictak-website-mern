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

function App() {
  return (
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
  );
}

export default App;
