import express from 'express';
import 'express-async-errors';
import { APP_PORT } from './config';
import path from 'path';
import cors from 'cors';

import { errorHandler } from './errors/errorHandler';

import './database/connection';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Server started on port: ${APP_PORT}`);
});