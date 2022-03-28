import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const getFileType = (file: Express.Multer.File) => {
  const mimeType = file.mimetype.split("/");
  return mimeType[mimeType.length - 1];
}

const generateFileName = (req: Request, file: Express.Multer.File, cb: FileNameCallback) => {
  const extension = getFileType(file);
  const filename =  Date.now() + '-' + Math.round(Math.random() * 1e6) + '.' + extension;
  cb(null, file.fieldname + '-' + filename);
};

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const extension = getFileType(file);
  const allowedTypes = /jpg|jpeg|png/;
  const passed = allowedTypes.test(extension);
  
  if (passed) {
    return cb(null, true);
  }
  return cb(null, false);

};

export const fileMiddleware = ((req, res, next) => {
  const storage = multer.diskStorage({
    destination: (
      req: Request, 
      file: Express.Multer.File,
      cb: DestinationCallback
    ): void => {


      console.log('fileMiddleware req.body', req.body);
      // console.log('fileMiddleware req.user', req.user);
      const { id } = req.body;
      const dest = `uploads/user/${id}`;

      fs.access(dest, (err) => {
        if (err) {
          return fs.mkdir(dest, (err) => {
            cb(err, dest);
          })
        } else {
          fs.readdir(dest, (err, files) => {
            if (err) throw err;

            for (const file of files) {
              fs.unlink(path.join(dest, file), (err) => {
                if (err) throw err;
              });
            }
          });
          return cb(null, dest);
        }
      });
    },
    filename: generateFileName,
  });

  return multer({
    storage,
    fileFilter,
  }).single("avatar");
})();
