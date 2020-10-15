import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: Array<string>;
}

export const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({
      error: 'Bad Request',
      message: 'Validation failed',
      errors
    });
  }
  
  console.error(error);

  return response.status(500).json({
    error: 'Internal Server Error',
    message: error.message
  });
};