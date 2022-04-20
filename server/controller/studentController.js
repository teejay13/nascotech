const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel')

// @desc  Get get students
// @route  Get /api/students
const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find()
    res.status(200).json({
        output: students,
        message: 'Get students'
    })
})


// @desc  Set get students
// @route  Post /api/student
const setStudents = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add a new text')
    }

    let { studentID,
        firstName,
        lastName,
        email,
        telephone,
        dob,
        level} = req.body;

    email = email.toLowerCase()
    const newStudent = await Student.create({
        "studentID": studentID,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "telephone": telephone,
        "dob": dob,
        "level": level
    })
    res.status(200).json({
        output: newStudent,
        type: success,
        message: `Above ID: ${newStudent.studentID} registration succesful`})
})



module.exports = {
    getStudents,
    setStudents,
} 