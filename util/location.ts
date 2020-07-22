import axios from 'axios';
import { HttpError } from '../models/httpError';

const API_KEY = process.env.GOOGLE_API_KEY;

const getCoordsForAddress = async (address: string) => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address',
      422
    );
    throw error;
  }
  const coordinates = data.results[0].geometry.location;

  return coordinates;
};

export { getCoordsForAddress };
