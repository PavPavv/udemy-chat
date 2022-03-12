import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import appConfig from './config/app';
import router from './router';

dotenv.config();

const app = express();
const PORT = appConfig.appPort;

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//   } else {
//     next()
//   }
// });

//  parse body requests to JSON
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//  fix CORS error
app.use(cors());

// global routing
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
