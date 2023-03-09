import React, { useState } from "react";

export default function UseStateHook() {
  let [employees, setEmployees] = useState([
    {
      empId: 1,
      empName: "Diwakar",
      empSalary: 1,
      empDesg: "Something",
      empGender: "male",
      skills: ["nothing", "something", "does not matter"],
    },
    {
      empId: 2,
      empName: "Dipendra",
      empSalary: 100000,
      empDesg: "CEO!!!",
      empGender: "male",
      skills: ["everything", "everything", "He knows everything"],
    },
  ]);
  return (
    <div>
      {employees.map(emp => {
        return (
          <ul style={{listStyle: "none"}}>
            <li>Name: {emp.empName}</li>
            <li>Salary: {emp.empSalary}</li>
            <li>Designation: {emp.empDesg}</li>
            <li>Gender: {emp.Gender}</li>
            <li>skills: {emp.skills}</li>
          </ul>
        );
      })}
    </div>
  );
}
