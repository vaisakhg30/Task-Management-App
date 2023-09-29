const express=require('express')
const app=express(); 
const taskController=require('../Controller/task.controller')
const router=express.Router()

router.post("/create",taskController.savetask)
router.get("/find",taskController.findtask)
router.put("/update/:email",taskController.updatetask)
router.post("/delete",taskController.deletetask)
router.post("/findone/:email",taskController.findonetask)






module.exports=router
