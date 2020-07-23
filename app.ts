import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { placesRoutes } from './routes/placesRoutes';
import { usersRoutes } from './routes/usersRoutes';
import { HttpError } from './models/httpError';

const app = express();

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use(express.static(path.join('public')));

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//     methods: 'GET,PATCH,POST,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
//   })
// );

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route', 404);
//   throw error;
// });

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headersSent) {
    return next(error);
  }
  res
    .status(error.statusCode)
    .json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ycmnj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('MongoDb connected.....');
    app.listen(process.env.PORT || 5000, () => {
      console.log('Listening to port 5000......');
    });
  })
  .catch((err) => console.log(err));
