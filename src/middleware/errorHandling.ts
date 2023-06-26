import { Request, Response, NextFunction } from 'express';
import { ErrorBody } from "./errorHandling.type"
import { errorsDefinitions } from "./errorDefinitions"



export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  let response: ErrorBody = { validRequest: false, message: ""};
  const errorParams: string[] = error.message.split("_");
  let errorCode:string = errorParams[0];
  let errorAction:string = errorParams[1];

  if (errorCode && errorAction) {
    response.validRequest = errorsDefinitions[errorCode][errorAction].validRequest,
    response.message = errorsDefinitions[errorCode][errorAction].message;
    res.status(Number(errorCode)).json(response);
  } else {
    res.status(500).json({ error: "Failed" });
  }

  
}; 