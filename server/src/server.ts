import express from 'express';
import { APP_PORT } from './config'

const app = express();

app.get('/', (request, response) => {
  return response.json({
    msg: 'Hello World!'
  });
});

app.listen(APP_PORT, () => {
  console.log(`Server started on port: ${APP_PORT}`);
});