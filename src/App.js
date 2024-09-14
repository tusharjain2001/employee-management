import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./Components/AddEmployee";
import Employee from "./Components/Employee";
import Navbar from "./Components/Navbar";
import UpdateEmployee from "./Components/UpdateEmployee";

function App() {
  return (
    <div className="bg-slate-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<UpdateEmployee />} />


      </Routes>
    </div>
  );
}

export default App;
