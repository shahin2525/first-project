import express from 'express';
import { StudentController } from './student.controller';
import validationRequest from '../../middlwares/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
router.patch(
  '/:studentId',
  validationRequest(studentValidations.updateStudentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/:studentId', StudentController.deleteStudent);
export const StudentRoutes = router;
