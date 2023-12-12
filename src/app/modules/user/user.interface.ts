export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'student' | 'faculty' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
// export type NewUser = {
//   role: string;
//   password: string;
//   id: string;
// };
