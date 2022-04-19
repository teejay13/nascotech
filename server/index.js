const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.port || 4050
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nascoUser:nascoUser@cluster0.gdbtq.mongodb.net/oStudentReg?retryWrites=true&w=majority")



app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/getStudents', require("./routes/studentRoutes"))

app.use(errorHandler)



app.listen(port,() => {
    console.log("Sever runs good!!!")
})