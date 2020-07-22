import multer from 'multer';
import { v1 as uuidv1 } from 'uuid';

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

type MIME_TYPE = 'image/png' | 'image/jpeg' | 'image/jpg';

const fileUpload = multer({
  limits: {
    fileSize: 5000000,
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype as MIME_TYPE];
      cb(null, uuidv1() + '.' + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = file.mimetype in MIME_TYPE_MAP ? true : false;
    let error = isValid ? null : new Error('Invalid mime type!');
    cb(error, isValid);
  },
});

export { fileUpload };
