

export interface ErrorBody {
    validRequest: boolean;
    message: string;
  }
  
export interface ErrorsDefinitions {
    [errorCode: string]: {
      [errorAction: string]: {
        validRequest: boolean,
        code: number;
        message: string;
      };
    };
}
