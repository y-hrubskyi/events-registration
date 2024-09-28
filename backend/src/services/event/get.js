import { Event } from '#models/index.js';

export const get = async () => {
  const events = await Event.find();
  return events;
};
