const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim: true,
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    telephone:{
        type: String,
        required:true,
        trim: true,
    },
    dob:{
        type: Date,
        required: true,
        trim: true,
    },
    level:{
        type: number,
        required: true,
        trim: true,
    },
    gender: String,
    address:String,
    guardian:String,
    guardianTel:Number
});


const StudentModel = mongoose.model("students",studentSchema)

module.exports = StudentModel