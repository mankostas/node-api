import { ErrorsDefinitions } from "./errorHandling.type"

export const errorsDefinitions:ErrorsDefinitions = {
    //NOT FOUND ERROR DEFINITIONS//
    400 : {
      "getAll": {
        validRequest: true,
        code: 401,
        message: "No events found"
      },
      "getOne": {
        validRequest: true,
        code: 402,
        message: "Event not found"
      },
      "updateOne": {
        validRequest: true,
        code: 403,
        message: "Event not found"
      }
    },
    //INTERNAL SERVER ERROR//
    500 : {
      "getAll": {
        validRequest: false,
        code: 500,
        message: "Failed to retrieve events"
      },
      "getOne": {
        validRequest: false,
        code: 500,
        message: "Failed to retrieve event"
      },
      "createOne": {
        validRequest: false,
        code: 500,
        message: "Failed to create event"
      },
      "updateOne": {
        validRequest: false,
        code: 500,
        message: "Failed to update event"
      }
    }
  }