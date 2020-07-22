import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { IPlaceDoc } from './place';

interface IUserAttrs {
  name: string;
  email: string;
  password: string;
  image: string;
  places: mongoose.Types.Array<IPlaceDoc>;
}

export interface IUserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  image: string;
  places: mongoose.Types.Array<IPlaceDoc>;
}

interface IUserModel extends mongoose.Model<IUserDoc> {
  build(attrs: IUserAttrs): IUserDoc;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place' }],
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema);

userSchema.statics.build = (user: IUserAttrs) => {
  return new User(user);
};

export { User };
