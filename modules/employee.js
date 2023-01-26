const task = require("./task.js")
const Task = require("./task.js").Task

class Employee {
  position
  tasks = []
  managerId
  firstName
  lastName

  constructor(employee) {
    this.validate(employee)
    this.firstName = employee.firstName
    this.lastName = employee.lastName
    this.position = employee.position
    this.managerId = employee.managerId
    this.tasks = employee.task === undefined ? [] : employee.task
  }
  validate(employee) {
    if(!employee.firstName) throw new Error('Employee First Name must be added')
    if(!employee.lastName) throw new Error('Employee Last Name must be added')
    if(!employee.position) throw new Error('Employee Position must be added')
    if(!employee.managerId) throw new Error('Employee ManagerId must be added')
  }

}

module.exports = {
  Employee: Employee,
}
