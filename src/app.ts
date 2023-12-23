/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import globalError from './app/middlwares/globalErrorHandlers';
import notFound from './app/middlwares/notFound';
import router from './app/routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());
// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};
app.get('/', test);

// global error handle
app.use(globalError);
app.use(notFound);

export default app;
