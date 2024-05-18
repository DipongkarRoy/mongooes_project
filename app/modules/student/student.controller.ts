import { Request, Response } from 'express';
import { studentServiceInfoDb } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { students } = req.body;

    const result = await studentServiceInfoDb.createStudentDb(students);

    res.status(200).json({
      success: true,
      massage: 'student data successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServiceInfoDb.allStudents();
    res.status(200).json({
      success: true,
      massage: 'student data peyeci',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentServiceInfoDb.singleStudent(id);
    res.status(200).json({
      success: true,
      massage: 'student single data peyeci',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateStudentInfo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentServiceInfoDb.updateStudent(id);

    res.status(200).json({
      success: true,
      massage: 'data update done',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getStudent,
  getSingleStudent,
  updateStudentInfo
};
