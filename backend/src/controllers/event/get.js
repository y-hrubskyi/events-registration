import { eventService } from '#services/index.js';

export const get = async (req, res, next) => {
  try {
    const { page = 1, limit = 12 } = req.query;

    const events = await eventService.get(page, limit);
    res.json(events);
  } catch (error) {
    next(error);
  }
};
