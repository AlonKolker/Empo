const express = require("express")
const { getOrganization, addTask, report,createDemoData,getById,addEmployee } = require("./organization.controller")
const router = express.Router()

router.get("/", getOrganization)
router.get("/:id", getById)
router.put("/report", report)
router.put("/addTask", addTask)
router.post("/createDemoData", createDemoData)
router.put("/addEmployee", addEmployee)



module.exports = router
