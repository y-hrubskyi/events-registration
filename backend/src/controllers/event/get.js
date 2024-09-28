import { eventService } from '#services/index.js';

export const get = async (req, res, next) => {
  try {
    const events = await eventService.get();
    res.json(events);
  } catch (error) {
    next(error);
  }
};
