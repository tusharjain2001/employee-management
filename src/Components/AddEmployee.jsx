import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EmployeeService from "../Services/EmployeeService";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee);
    alert("Employee Information Added");
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
    navigate("/");
    
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };
  return (
    <div className="flex justify-center">
    <form className="flex flex-col gap-4 max-w-80 bg-gray-500 rounded-md w-96 p-4 my-6">
      <div className="text-white text-xl p-2 font-bold tracking-wider">Add New Employee</div>
      <div className="flex flex-col gap-4 p-2">
        <label className="text-white font-semibold tracking-wide " htmlFor="name">Name</label>
        <input
          type="text"
          className="rounded-md p-1 font-serif outline-none tracking-wide italic text-gray-600"
          id="name"
          placeholder="name"
          name="name"
          onChange={(e) => handleChange(e)}
          value={employee.name}
          required
        />
        <label className="text-white font-semibold tracking-wide " htmlFor="phone">Phone</label>
        <input
          type="number"
          id="phone"
          className="rounded-md p-1 font-serif outline-none tracking-wide italic text-gray-600"
          placeholder="phone"
          name="phone"
          onChange={(e) => handleChange(e)}
          value={employee.phone}
          required
        />
        <label className="text-white font-semibold tracking-wide " htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="rounded-md p-1 font-serif outline-none tracking-wide italic text-gray-600"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={employee.email}
          required
        />
      </div>
      <div className="flex gap-4 p-2 justify-center">
        <button className="bg-blue-500 p-2 font-bold rounded-lg text-white tracking-wide hover:bg-blue-700" onClick={saveEmployee}> Save</button>
        <button className="bg-green-500 p-2 font-bold rounded-lg text-white tracking-wide hover:bg-green-700" onClick={reset}>Clear</button>
        <button className="bg-red-500 p-2 font-bold rounded-lg text-white tracking-wide hover:bg-red-700" onClick={() => navigate("/")}>Cancel</button>
      </div>
    </form>
    </div>
  );
};

export default AddEmployee;
