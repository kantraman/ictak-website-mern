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

import { AboutUs } from "./components/Aboutus/AboutUs";

import AcademicMemberPage from './components/memberPage/AcademicMemberPage';
import CorporateMemberPage from './components/corpMemPage/CorporateMemberPage';
import Partnership from './components/partnership/Partnership';
import CorporateMember from './components/membership/CorporateMember';
import PremiumMember from './components/membership/PremiumMember';
import DateRange from './components/dateRange/DateRange';
import Techathlon from './components/eventTechathlon/Techathlon';


import { Mainpage } from "./components/Mainpage";
function App() {
  return (
    <div className="App">


    <BrowserRouter>
      <main>
        <Routes>

         

            <Route path="/" element={<Mainpage />} />
 <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cources" element={<Cources />} />
            <Route path="/CreateCource" element={<CreateCource />} />
            <Route path="/cource/:id" element={<UpdateCource />} />
            <Route path="/singlecourse/:id" element={<SingleCourse />} />
            <Route path="/registerScreen" element={<RegisterScreen />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/academic-member" element={<AcademicMemberPage />} />
            <Route path="/corporate-member" element={<CorporateMemberPage />} />
            <Route path="/academic-member-apply" element={<PremiumMember />} />
            <Route path="/corporate-member-apply" element={<CorporateMember />} />
            <Route path="/techathlon"  element={<Techathlon />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/export-academic" element={<DateRange type={1} />} />
            <Route path="/export-corporate" element={<DateRange type={2} />} />
            <Route path="/export-partnership" element={<DateRange type={3} />} />
            <Route path="/export-messages" element={<DateRange type={4} />} />

        </Routes>
      </main>
    </BrowserRouter>

    
    </div>

  );
}

export default App;
