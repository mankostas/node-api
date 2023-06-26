import {validationProps, validationResponse} from "./validation.type"


export const validateEventInput = (data: validationProps): validationResponse => {
  let errors: validationProps = {
    title: '',
    description: '',
    eventDate: '',
    location: ''
  };
  let isValid = true;

  if (!data.title || data.title.trim().length === 0) {
    errors.title = 'Title field is required';
    isValid = false;
  }

//   if (!data.description || data.description.trim().length === 0) {
//     errors.description = 'Description field is required';
//     isValid = false;
//   }

  if (!data.eventDate) {
    errors.eventDate = 'Date/time field is required';
    isValid = false;
  }

  if (!data.location || data.location.trim().length === 0) {
    errors.location = 'Location field is required';
    isValid = false;
  }

  return { errors, isValid };
};