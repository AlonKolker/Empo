const dbService = require("../services/db-service")
const ObjectId = require("mongodb").ObjectId
const Employee = require("../modules/employee").Employee
const Manager = require("../modules/manager").Maneger

async function query(filter) {
  try {
    filter === {} ? {} : filter
    const collection = await dbService.getCollection("employee")

    return await collection.find(filter).toArray()
  } catch (err) {
    logger.error("cannot find employees", err)
    throw err
  }
}

async function getById(employeId) {
  try {
    const collection = await dbService.getCollection("employee")
    return collection.findOne({ _id: ObjectId(employeId) })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function update(employee) {
  try {
    var id = ObjectId(employee._id)
    delete employee._id
    const collection = await dbService.getCollection("employee")

    let testd = await collection.updateOne({ _id: id }, { $set: { ...employee } })
    console.log(testd)
    employee._id = id
    return employee
        // return employee
  } catch (err) {
    logger.error(`cannot update employee ${employee._id}`, err)
    throw err
  }
}
async function buildInstance(employee) {
  employee.position = employee.position.toLowerCase()
try{

  if (employee.position.toLowerCase() === "employee") {
    // return new Employee(employee)
    return await _add(new Employee(employee))
  } else if (employee.position === "manager") {
    return await  _add( new Manager(employee))
  }
}catch(err){
  console.log('cannot add employee', err);
    throw err;
}
}



async function _add(employee) {
  try {
    const collection = await dbService.getCollection('employee');
    await collection.insertOne(employee);
    return employee;
  } catch (err) {
    console.log('cannot add employee', err);
    throw err;
  }
}

module.exports = {
  query,
  getById,
  update,
  buildInstance,
}
