import { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  weight: number;
  lat: number;
  lng: number;
}

export const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  weight: { type: Number, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});
