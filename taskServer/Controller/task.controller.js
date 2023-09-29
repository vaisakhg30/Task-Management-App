const express=require('express')
const mongoose=require('mongoose')

const server=express();
const taskModel=require('../Model/task.model')


exports.savetask=((req,res)=>{
    try {
        taskModel.create(req.body).then((data)=>{
            res.send("data saved")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.findtask=((req,res)=>{
    try {
        const email=req.body.email

        taskModel.find().then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.updatetask=((req,res)=>{
    try {
        taskModel.updateOne({"taskenquiry":req.params.email},{$set:req.body}).then((data)=>{
            
            res.send("updated")
            
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.deletetask=((req,res)=>{
    try {
     
        const id = req.body.id
        console.log(req.body,"query")
        taskModel.deleteOne({"id":id}).then((data)=>{
            res.status(200).send("deleted")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})
exports.findonetask=((req,res)=>{
    try {
        const email=req.body.email

        taskModel.findOne({"taskenquiry":req.params.email}).then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})