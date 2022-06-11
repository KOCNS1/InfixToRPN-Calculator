import { ApiException } from '../types/exceptions';

/**
 * Main expection class
 */
class Exception implements ApiException {
  constructor(readonly error: any, readonly status: number) {}
}

/**
 * Deals with the 404 error
 */
export class NotFoundException extends Exception {
  /**
   * On appelle le `constructor` de la classe parente `Exception`
   */
  constructor(error: any) {
    super(error, 404);
  }
}

/**
 * Deals with the 400 error
 */
export class BadRequestException extends Exception {
  /**
   * On appelle le `constructor` de la classe parente `Exception`
   */
  constructor(error: any) {
    super(error, 400);
  }
}
