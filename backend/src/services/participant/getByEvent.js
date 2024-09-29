import { Participant } from '#models/index.js';

export const getByEvent = async eventId => {
  const participants = await Participant.find({ eventId });
  return participants;
};
