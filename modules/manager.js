const Employee = require("./employee").Employee
const Report = require("./report").Report

class Maneger extends Employee {
  employees = []
  reports = []
  typeOfManeger = "manager"

  constructor({ firstName, lastName, position, tasks, manegerId, employees, reports, managerId, typeOfManeger }) {
    super({ firstName, lastName, position, tasks, manegerId })

    this.validate(firstName, lastName, position)
    this.employees = employees || this.employees
    this.reports = reports || this.reports
    this.typeOfManeger = typeOfManeger || this.typeOfManeger
    this.managerId = managerId || null
  }

  validate(firstName, lastName, position) {
    // if (!firstName) throw new Error("Maneger First Name must be added")
    // if (!lastName) throw new Error("Maneger Last Name must be added")
    // if (!position) throw new Error("Maneger Position must be added")
  }
}

module.exports = {
  Maneger: Maneger,
}
