import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";
import { useEffect } from "react";

const Employee = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-[300px] my-[50px] flex flex-col gap-6">
        <div>
          <button
            className="bg-blue-500 text-white font-bold rounded-md p-4 tracking-wider"
            onClick={() => navigate("/addemployee")}
          >
            ADD EMPLOYEE
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr className="">
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <tr className="hover:bg-white">
                    <td>{employee.name}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td className="flex gap-2">
                      <button
                        className="bg-green-500 p-1 font-bold rounded-lg text-white tracking-wide hover:bg-green-700"
                        onClick={(e, id) => editEmployee(e, employee.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 p-1 font-bold rounded-lg text-white tracking-wide hover:bg-red-700"
                        onClick={(e, id) => deleteEmployee(e, employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
