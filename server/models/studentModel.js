const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentID:{
        type: String,
        unique: [true, "That Student ID already registered."],
        required: [true, "StudentID is required."],
        trim: true,
    },
    firstName:{
        type: String,
        required: [true, "First Name is required."],
        trim: true,
    },
    lastName:{
        type: String,
        required: [true, "Last Name is required."],
        trim: true,
    },
    email:{
        type: String,
        unique: [true, "Email address already registered."],
        required: [true, "email address is required."],
        trim: true,
    },
    telephone:{
        type: Number,
        unique: [true, "Telephone number already registered."],
        required: [true, "Telephone number is required."],
        trim: true,
    },
    dob:{
        type: Date,
        required: [true, "Date of birth is required."],
        trim: true,
    },
    level:{
        type: Number,
        required: [true, "level is required."],
        trim: true,
    },
    gender: String,
    address:String,
    guardian:String,
    guardianTel:Number
},{
    timestamps: true
});


const StudentModel = mongoose.model(process.env.MANGO_COLLECTION,studentSchema)

module.exports = StudentModel