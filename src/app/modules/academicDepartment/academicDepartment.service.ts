import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};
const getAllAcademicDepartmentIntoDB = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const getSingleAcademicDepartmentIntoDB = async (id: string) => {
  const result = await AcademicDepartment.findById({ _id: id });
  return result;
};
const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};
export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
};
