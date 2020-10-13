import { ErrorRequestHandler} from 'express';

export const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(500).json({
    error: 'Internal Server Error',
    message: error.message
  });
};