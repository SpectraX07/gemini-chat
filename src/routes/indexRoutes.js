import express from 'express';
import apiRoutes from './apiRoutes.js';

const router = express.Router();

// Add routes here
router.use('/api', apiRoutes);

export default router;
