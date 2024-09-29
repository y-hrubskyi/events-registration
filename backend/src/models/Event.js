import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    organizer: {
      type: String,
      required: true
    }
  },
  { versionKey: false, timestamps: true }
);

export const Event = model('Event', eventSchema);
