export class HttpError extends Error {
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    // Object.setPrototypeOf(this, HttpError.prototype);
  }
  statusCode: number;
  message: string;
}
