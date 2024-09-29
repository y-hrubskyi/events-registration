import { participantService } from '#services/index.js';

export const create = async (req, res, next) => {
  try {
    const participant = await participantService.create(req.body);
    res.status(201).json(participant);
  } catch (error) {
    next(error);
  }
};
