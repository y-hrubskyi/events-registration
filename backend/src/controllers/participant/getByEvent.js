import { participantService } from '#services/index.js';

export const getByEvent = async (req, res, next) => {
  try {
    const { eventId } = req.params;

    const participants = await participantService.getByEvent(eventId);
    res.json(participants);
  } catch (error) {
    next(error);
  }
};
