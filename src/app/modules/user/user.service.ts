import config from '../../config';
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
// import { NewUser, TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};
  // if password is not given ,use default password
  userData.password = password || (config.default_password as string);
  // set student role
  userData.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  // set generate  id
  userData.id = await generateStudentId(admissionSemester);
  // create a user
  const newUser = await User.create(userData);
  // create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await Student.create(payload);
    return newStudent;
  }

  return newUser;
};

export const UserService = { createStudentIntoDB };
