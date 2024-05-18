import express from 'express'
import { studentController } from './student.controller'

const router = express.Router()
//will call controlar funtion :

router.post('/create-student' ,studentController.createStudent)
router.get('/' ,studentController.getStudent)
router.get('/:id' ,studentController.getSingleStudent)
router.patch('/:id',studentController.updateStudentInfo)


export const studentRouter = router ; 