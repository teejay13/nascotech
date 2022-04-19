const express = require('express')
const router  = express.Router();
const {getStudents,setStudents} = require('../controller/studentController')


 
router.route('/').get(getStudents).post(setStudents)


router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update Student ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete Student ${req.params.id}` })
})


module.exports = router

