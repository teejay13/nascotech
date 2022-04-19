const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nascoUser:nascoUser@cluster0.gdbtq.mongodb.net/oStudentReg?retryWrites=true&w=majority")


app.listen(3001,() => {
    console.log("Sever runs good!!!")
})