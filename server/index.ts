import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import appConfig from './config/app';
import router from './router';

dotenv.config();

const app = express();
const PORT = appConfig.appPort;

//  parse body requests to JSON
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//  fix CORS error
app.use(cors());

// global routing
app.use(router);

//  serve static files
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
