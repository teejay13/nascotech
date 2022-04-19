const asyncHandler = require('asyncHandler');

// @desc  Get get students
// @route  Get /api/students
const getStudents = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get students'})
})


// @desc  Set get students
// @route  Post /api/student
const setStudents = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a new text')
    }
    res.status(200).json({message: 'Set students'})
})



module.exports = {
    getStudents,
    setStudents,
} 