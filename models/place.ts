import mongoose from 'mongoose';
import { IUserDoc } from './user';

interface ILocation {
  lat: number;
  lng: number;
}

interface IPlaceAttrs {
  title: string;
  description: string;
  image: string;
  address: string;
  location: ILocation;
  creator: IUserDoc;
}

export interface IPlaceDoc extends mongoose.Document {
  title: string;
  description: string;
  image: string;
  address: string;
  location: ILocation;
  creator: IUserDoc;
}

interface IPlaceModel extends mongoose.Model<IPlaceDoc> {
  build(attrs: IPlaceAttrs): IPlaceDoc;
}

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

const Place = mongoose.model<IPlaceDoc, IPlaceModel>('Place', placeSchema);

placeSchema.statics.build = (place: IPlaceAttrs) => {
  return new Place(place);
};

export { Place };
