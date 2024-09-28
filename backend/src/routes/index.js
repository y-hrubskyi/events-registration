import { eventRoutes } from './eventRoutes.js';
import { participantRoutes } from './participantRoutes.js';

export const initRoutes = app => {
  app.use('/api/events', eventRoutes);
  app.use('/api/participants', participantRoutes);
};
