
export type Gardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};

export type UserName={
  firstName: string;
  mildleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emegencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  gardian: Gardian;
  profileImg:string,
  isActive :'active'|'inActive'
};
