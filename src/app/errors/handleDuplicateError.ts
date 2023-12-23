/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];

  const errorSource: TErrorSources = [
    {
      path: ' ',
      message: `${extractedMessage} is already exists`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'duplicate error',
    errorSource,
  };
};

export default handleDuplicateError;
