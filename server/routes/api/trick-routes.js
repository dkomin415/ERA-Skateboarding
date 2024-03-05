import express from 'express';
const router = express.Router();

import trickController from '../../controllers/trick-controller.js';
const { getAllTricks, getTrickById, createTrick, updateTrick, deleteTrick } = trickController;

// Set up GET all and POST at /api/tricks
router
    .route('/')
    .get(getAllTricks)
    .post(createTrick);

// Set up GET by id, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getTrickById)
    .put(updateTrick)
    .delete(deleteTrick);

export default router;