import express from 'express';
import { articleController } from '../../../controllers/api/V1/ArticleController';

export const articleRoutes = express.Router();

articleRoutes.get('/', articleController.getAllEvents);
articleRoutes.post('/', articleController.createEvent); 
articleRoutes.get('/:id', articleController.getEvent);
articleRoutes.put('/:id', articleController.updateEvent);