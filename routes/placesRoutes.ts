import express from 'express';
import { check } from 'express-validator';
import { fileUpload } from '../middleware/fileUpload';
import { checkAuth } from '../middleware/checkAuth';
import {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlaceById,
  deletePlace,
} from '../controllers/placesController';

const router = express.Router();

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlacesByUserId);

router.use(checkAuth);

router.post(
  '/',
  fileUpload.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty(),
  ],
  createPlace
);

router.patch(
  '/:pid',
  [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
  updatePlaceById
);

router.delete('/:pid', deletePlace);

export { router as placesRoutes };
