import { BaseError } from './base-error'

export class InvalidInputError extends BaseError {
  constructor(message: string, public data: unknown) {
    super(message, 400)
  }
}
