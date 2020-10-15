import { config } from 'dotenv';
config();

export const APP_PORT = process.env.APP_PORT || 3333;
export const APP_HOST = process.env.APP_HOST || 'localhost';