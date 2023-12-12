/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';

import { UserService } from './user.service';
import sendResponse from '../../utilies/sendResponse';
import catchAsync from '../../utilies/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student has created successfully',
    data: result,
  });
});

export const UserControllers = { createStudent };
