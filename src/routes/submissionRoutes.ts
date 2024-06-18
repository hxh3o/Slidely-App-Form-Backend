import express from 'express';
import { submitForm, readForm } from '../controllers/submissionController';

export const submissionRouter = express.Router();

// POST /api/submit
submissionRouter.post('/submit', submitForm);

// GET /api/read?index=0
submissionRouter.get('/read', readForm);
