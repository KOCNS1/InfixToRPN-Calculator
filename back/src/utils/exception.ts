import { ApiException } from '../types/exceptions';

/**
 * Main expection class
 */
export class Exception implements ApiException {
  constructor(readonly error: any, readonly status: number) {}
}

/**
 * Deals with the 404 error
 */
export class NotFoundException extends Exception {
  constructor(error: any) {
    super(error, 404);
  }
}

/**
 * Deals with the 400 error
 */
export class BadRequestException extends Exception {
  constructor(error: any) {
    super(error, 400);
  }
}
