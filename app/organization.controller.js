const organizationService = require("./organization.service.js")

async function getOrganization(req, res) {
  let filter = req.body
  try {
    const organization = await organizationService.query(filter)
    res.json(organization)
  } catch (err) {
    res.status(500).send({ err: "Failed to get entitys" })
  }
}

async function report(req, res) {
  const { manager, employeeId } = req.body

  try {
    let currManager = await organizationService.getById(manager._id)

    if (currManager.employees.includes(employeeId)) {
      await organizationService.update(manager)
      res.json(manager)
    }
  } catch (err) {
    res.status(500).send({ err: "Failed add report" })
  }
}

async function addTask(req, res) {
  const { text, dueDate, employee, managerId } = req.body
  try {
    let currEmployee = await organizationService.getById(employee._id)

    if (currEmployee.manegerId === managerId) {
      currEmployee.tasks.push({ text, assignDate: new Date(Date.now()), dueDate })
      await organizationService.update(currEmployee)
      res.json(currEmployee)
    }
  } catch (err) {
    res.status(500).send({ err: "Failed to addTask" })
  }
}

async function getById(req, res) {
  try {
    const employeId = req.params.id
    const employee = await organizationService.getById(employeId)
    res.json(employee)
  } catch (err) {
    res.status(500).send({ err: "Failed to get entity" })
  }
}

async function addEmployee(req, res) {
  let employee = req.body
  try {
    let newEmployee = await organizationService.buildInstance(employee)
    res.json(newEmployee)
  } catch (err) {
    console.log("Cannot add employee")
    throw err
  }
}

async function createDemoData(req, res) {}
module.exports = {
  getOrganization,
  getById,
  report,
  addTask,
  createDemoData,
  addEmployee,
}
