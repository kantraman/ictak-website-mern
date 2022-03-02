import "./App.css";
import Cources from "./cources/Cources";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCource from "./cources/CreateCource";
import UpdateCource from "./cources/UpdateCource";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/cources" element={<Cources />} />
          <Route path="/CreateCource" element={<CreateCource />} />
          <Route path="/cource/:id" element={<UpdateCource />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
