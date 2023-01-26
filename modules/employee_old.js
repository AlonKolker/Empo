const Task = require("./task.js").Task

class Employee {
  position
  tasks = []
  manegerId
  firstName
  lastName

  constructor() {
  }

  setfirstName(firstName) {
    if (!firstName) {
      res.json("First name must be added")
      throw new Error("First name must be added")
    }
    this.firstName = firstName
    // console.log('firstName: ',firstName)
    return this
  }
  setLastName(lastName) {
    this.lastName = lastName
    // console.log('lastName: ',lastName)
    return this
  }
  setPosition(position) {
    this.position = position
    // console.log('position: ',position)
    return this
  }
  setManagerId(manegerId) {
    if(!manegerId || manegerId === 'null'){
      throw new Error('Employee must have manager')
    }
    this.manegerId = manegerId
    return this
  }



  setTasks(tasks) {
    console.log('task' ,tasks)
    if(tasks) this.tasks = tasks 
    return this
  }

  get fullName() {
    return this.firstName + this.lastName
  }

  get position() {
    console.log(this.position)
    return this.position
  }
}

// export default Employee;
// module.exports = {
//   Employee: Employee,
// }
