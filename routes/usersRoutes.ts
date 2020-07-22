import express from 'express';
import { check } from 'express-validator';
import { getUsers, signUp, loginIn } from '../controllers/usersController';
import { fileUpload } from '../middleware/fileUpload';

const router = express.Router();

router.get('/', getUsers);

router.post(
  '/signup',
  fileUpload.single('image'),
  [
    check('name').not().isEmail(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signUp
);

router.post('/login', loginIn);

export { router as usersRoutes };
