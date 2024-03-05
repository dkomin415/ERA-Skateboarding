import express from 'express';
import trickRoutes from './trick-routes.js';

const router = express.Router();

router.use('/tricks', trickRoutes);

export default router;