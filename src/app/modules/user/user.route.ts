import express from 'express';
import { UserControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import validationRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
