import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useEffect } from "react";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id);
    alert("Employee Information Added");
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-4 bg-gray-400 rounded-md w-96 p-4 my-6 ">
        <div className="text-white text-xl p-2 font-bold">Update Employee</div>
        <div className="flex flex-col gap-4 p-2">
          <label className="text-white font-semibold tracking-wide " htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            className="rounded-md p-1 font-serif outline-none tracking-wide italic text-gray-600"
            name="name"
            onChange={(e) => handleChange(e)}
            value={employee.name}
            required
          />
          <label className="text-white font-semibold tracking-wide " htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            placeholder="phone"
            className="rounded-md p-1 font-serif outline-none tracking-wide italic text-gray-600"
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
          <button className="bg-green-500 p-2 font-bold rounded-lg text-white tracking-wide hover:bg-green-700" onClick={updateEmployee}> Update</button>

          <button className="bg-red-500 p-2 font-bold rounded-lg text-white tracking-wide hover:bg-red-700" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;
