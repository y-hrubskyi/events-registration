import { Router } from 'express';

import { eventController } from '#controllers/index.js';

const router = Router();

router.get('/', eventController.get);

export { router as eventRoutes };
