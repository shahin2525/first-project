import Joi from 'joi';

const userNameJoiSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .trim()
    .pattern(/^[A-Z]/, { invert: true })
    .message('First Name must start with a capital letter'),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .trim()
    .pattern(/^[A-Z]/, { invert: true })
    .message('Last name should only contain letters'),
});

// Joi schema for Guardian
const guardianJoiSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContact: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContact: Joi.string().required(),
});

// Joi schema for LocalGuardian
const localGuardianJoiSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameJoiSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dataOfBirth: Joi.string().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  email: Joi.string().email().required(),
  bloodGroup: Joi.string().valid('A-', 'B+', 'AB+', 'O-'),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianJoiSchema.required(),
  localGuardian: localGuardianJoiSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
