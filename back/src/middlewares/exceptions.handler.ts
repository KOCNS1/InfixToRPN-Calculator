import { NextFunction, Request, Response } from 'express';

/**
 * Global middleware for exceptions handling
 *
 * @param err - Express error
 * @param req - The request
 * @param res - The response
 * @param next - The next middleware
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const ExceptionsHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.status && err.error) {
    return res
      .status(err.status)
      .json({ error: err.error, status: err.status });
  }

  return res.status(500).json({ error: 'Erreur interne', status: 500 });
};
