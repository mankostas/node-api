import express from 'express';
import { eventController } from '../../../controllers/api/V1/EventController';

export const articleRoutes = express.Router();

articleRoutes.get('/', eventController.getAllEvents);
articleRoutes.post('/', eventController.createEvent); 
articleRoutes.get('/:id', eventController.getEvent);
articleRoutes.put('/:id', eventController.updateEvent);