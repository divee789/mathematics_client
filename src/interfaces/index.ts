export interface ISignUp {
  matriculation_number: string;
  first_name: string;
  last_name: string;
  department: string;
  password: string;
  level: number;
}

export interface ILogIn {
  matriculation_number: string;
  password: string;
}

export interface IStudent extends ISignUp {
  id: string;
  email: string;
  phone_number: string;
  email_verified: boolean;
  profile_image: string;
  phone_number_verified: boolean;
}

export interface ICourse {
  id: string;
  title: string;
  course_code: string;
  credit_load: number;
  semester: number;
  level: number;
  lecturer: object;
  lecturerId: number;
}
