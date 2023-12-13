import express from 'express';

import validationRequest from '../../middlwares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controllers';
const router = express.Router();
router.post(
  '/',
  validationRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);
router.get('/', AcademicDepartmentController.getAllAcademicDepartment);
router.get(
  '/:departmentId',
  AcademicDepartmentController.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  validationRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
