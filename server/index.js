const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const cors = require("cors")
const port = process.env.port || 4050

connectDB()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/api/getStudents', require("./routes/studentRoutes"))

app.use(errorHandler)



app.listen(port,() => {
    console.log("Sever runs good!!!")
})