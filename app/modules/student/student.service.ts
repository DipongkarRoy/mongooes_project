import { Student } from './student.interface';
import { StudentModel } from './student.schema';

const createStudentDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const allStudents = async () => {
  const result = await StudentModel.find();
  return result;
};

const singleStudent = async(id:string)=>{
    const result = await StudentModel.findOne({id})
    return result;
}
const updateStudent = async(id:string)=>{
    const result = await StudentModel.updateOne({id})
    return result
}
export const studentServiceInfoDb = {
  createStudentDb,
  allStudents,
  singleStudent,
  updateStudent
};
