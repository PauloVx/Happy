import { config } from 'dotenv';
config();

export const APP_PORT = process.env.APP_PORT || 3333;