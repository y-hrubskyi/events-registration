import { Event } from '#models/index.js';
import { setPaginationOptions } from '#utils/index.js';

export const get = async (page, limit) => {
  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      events,
      totalCount: [{ totalCount } = { totalCount: 0 }]
    }
  ] = await Event.aggregate([
    {
      $facet: {
        events: [
          { $skip: paginationOptions.skip },
          { $limit: paginationOptions.limit }
        ],
        totalCount: [{ $count: 'totalCount' }]
      }
    }
  ]);

  return { events, totalCount };
};
