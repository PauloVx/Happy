import express from 'express';
import { APP_PORT } from './config'

import './database/connection';

import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(APP_PORT, () => {
  console.log(`Server started on port: ${APP_PORT}`);
});