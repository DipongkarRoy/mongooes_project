import { Schema, model } from 'mongoose';
import { Gardian, Student, UserName } from './student.interface';


const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  mildleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gardianInfoSchema = new Schema<Gardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContact: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContact: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },
  emegencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  gardian: gardianInfoSchema,
  profileImg: {
    type: String,
    required: true,
  },
  isActive: ['active', 'inActive'],
});


//model create mongoose system:
export const StudentModel = model<Student>('Student',studentSchema)