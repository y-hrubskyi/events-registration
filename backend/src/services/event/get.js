import { Event } from '#models/index.js';
import { setPaginationOptions } from '#utils/index.js';

export const get = async (page, limit, sortConfig) => {
  const paginationOptions = setPaginationOptions(page, limit);

  const [[sortKey, sortValue] = ['createdAt', 'desc']] =
    Object.entries(sortConfig);
  const sortParam = sortValue === 'desc' ? -1 : 1;

  const [
    {
      events,
      totalCount: [{ totalCount } = { totalCount: 0 }]
    }
  ] = await Event.aggregate([
    {
      $facet: {
        events: [
          { $sort: { [sortKey]: sortParam } },
          { $skip: paginationOptions.skip },
          { $limit: paginationOptions.limit }
        ],
        totalCount: [{ $count: 'totalCount' }]
      }
    }
  ]);

  return { events, totalCount };
};
