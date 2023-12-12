import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  //   .refine(value => {
  //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
  //     return firstNameStr === value;
  //   }, { message: 'First name is not in capitalize format' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContact: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContact: z.string().min(1),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      email: z.string().email({ message: 'Email is not valid' }),
      bloodGroup: z.enum(['A-', 'B+', 'AB+', 'O-']).optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = { createStudentValidationSchema };
