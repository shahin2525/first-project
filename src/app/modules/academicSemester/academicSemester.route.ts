import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validationRequest from '../../middlwares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
const router = express.Router();
router.post(
  '/create-academic-semester',
  validationRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get('/', AcademicSemesterControllers.getAllAcademicSemester);
router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);
router.patch(
  '/:semesterId',
  validationRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);
export const AcademicSemesterRoutes = router;
