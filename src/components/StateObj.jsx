import React, { Component } from "react";

export default class StateObj extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
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
      ],
    };
  }
  render() {
      return <div>{this.state.employees.map(emp => {
          return (
              <>
              <h1>Name: {emp.empName}</h1>
                  <p>Salary: { emp.empSalary}</p>
                  <p>Designation: { emp.empDesg}</p>
                  <p>Gender: { emp.Gender}</p>
                  <p>skills: { emp.skills}</p>
                  </>
          )
      })}</div>;
  }
}

// console.log(new StateObj());
