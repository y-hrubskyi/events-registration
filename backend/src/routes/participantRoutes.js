import { Router } from 'express';

import { participantController } from '#controllers/index.js';

const router = Router();

router.get('/event/:eventId', participantController.getByEvent);

export { router as participantRoutes };
