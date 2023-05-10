export class InvalidInputError extends Error {
  constructor(message: string, public data: unknown) {
    super(message)
    this.name = this.constructor.name
  }
}
