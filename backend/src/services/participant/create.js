import { Participant } from '#models/index.js';

export const create = async newParticipant => {
  const participant = await Participant.create(newParticipant);
  return participant;
};
