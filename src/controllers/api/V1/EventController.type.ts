import { Event } from '../../../entities/Event';
import { validationProps } from "../../../includes/validation.type"



export interface EventResponseBody {
    validRequest: Boolean,
    message?: string,
    data?: Event[] | Event,
    errors?: validationProps
  }
  
export interface EventRequestBody {
    id: string;
    title: string,
    description?: string,
    location: string,
    eventDate: Date | string,
  }