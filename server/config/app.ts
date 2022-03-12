import dotenv from 'dotenv';

dotenv.config();

export default {
  appKey: process.env.APP_KEY,
  appPort: process.env.APP_PORT,
  appUrl: process.env.APP_URL,
}