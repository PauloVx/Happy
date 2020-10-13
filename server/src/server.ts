import express from 'express';
import { APP_PORT } from './config'

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    msg: 'Hello World!'
  });
});

app.listen(APP_PORT, () => {
  console.log(`Server started on port: ${APP_PORT}`);
});