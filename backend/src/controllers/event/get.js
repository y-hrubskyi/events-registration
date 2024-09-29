import { eventService } from '#services/index.js';

export const get = async (req, res, next) => {
  try {
    const { page = 1, limit = 12, ...sortConfig } = req.query;

    const events = await eventService.get(page, limit, sortConfig);
    res.json(events);
  } catch (error) {
    next(error);
  }
};
