import { Request, Response, NextFunction } from 'express';
import { Event } from '../../../entities/Event';
import { db } from "../../../includes/db"
import { validateEventInput } from '../../../includes/validation';
import { EventResponseBody, EventRequestBody } from "./EventController.type";



export const eventController = {
  getAllEvents: async (req: Request, res: Response<EventResponseBody>, next:NextFunction ): Promise<Response<EventResponseBody> | void> => {
    try {
      const eventRepository = db.getRepository(Event); 
      const events = await eventRepository.find();
      
      if (events.length <= 0) {
        next(new Error('400_getAll'));
        return;
      }
  
      const response: EventResponseBody = {
        validRequest: true,
        data: events,
      };
  
      return res.status(200).json(response);
    } catch (error) {
      next(new Error('500_getAll'));
    }
  },

  getEvent: async (req: Request, res: Response<EventResponseBody>, next: NextFunction): Promise<Response<EventResponseBody> | void> => {
    try {
      const eventId = parseInt(req.params.id, 10);
      const eventRepository = db.manager.getRepository(Event)
      const event = await eventRepository.findOneBy({
        id: eventId
      });

      if (!event) {
        next(new Error('400_getOne'));
        return;
      }

      const response: EventResponseBody = {
        validRequest: true,
        data: event,
      };
      
      return res.status(200).json(response);

    } catch (error) {
      next(new Error('500_getOne'));
    }
  },

  createEvent: async (req: Request<EventRequestBody>, res: Response<EventResponseBody>, next: NextFunction): Promise<Response<EventResponseBody> | void> => {
    try {
      const { 
        title,  
        description, 
        location,
        eventDate
      }:EventRequestBody = req.body;

      const { errors, isValid } = validateEventInput(req.body);
      if (!isValid) {
        const response: EventResponseBody = {
          validRequest: false,
          errors: errors,
        };
        return res.status(200).json(response);
      }

      const eventRepository = db.manager.getRepository(Event)
      const newEvent = eventRepository.create({
        title,
        description,
        location,
        eventDate, 
      });

      await eventRepository.save(newEvent)

      const response: EventResponseBody = {
        validRequest: true,
        message: 'New record of ID:' + newEvent.id,
        data: newEvent,
      };

      return res.status(200).json(response)
    } catch (error) {
      next(new Error('500_createOne'));
    }
  },



  updateEvent: async (req: Request<EventRequestBody>, res: Response<EventResponseBody>, next: NextFunction): Promise<Response<EventResponseBody> | void> => {
    try {
      const eventId:number = parseInt(req.params.id, 10);

      const { errors, isValid } = validateEventInput(req.body);
      if (!isValid) {
        const response: EventResponseBody = {
          validRequest: false,
          errors: errors,
        };
        return res.status(400).json(response);
      }

      const eventRepository = db.manager.getRepository(Event)
      const event = await eventRepository.findOneBy({
        id: eventId
      });

      if (!event) {
        next(new Error('400_updateOne'));
        return;
      }

      event.title = req.body.title;
      event.description = req.body.description;
      event.location = req.body.location;
      event.eventDate = req.body.eventDate;
      

      await eventRepository.save(event);

      const response: EventResponseBody = {
        validRequest: true,
        message: 'Record with ID of'+ event.id +' updated successfully',
        data: event
      };

      return res.status(200).json(response);
    } catch (error) {
      next(new Error('500_updateOne'));
    }
  },
};