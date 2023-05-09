import { object, string, number, ValidationError } from 'yup'

import { Either, left, right } from 'fp-ts/Either'
import { SaveApartmentInput } from '../types/save-apartment-input'

const apartmentSchema = object({
  id: string().required(),
  address: string().required(),
  size: number().required(),
  numberOfRooms: number().required(),
  numberOfBathrooms: number().required(),
  rent: number().required(),
})

export const validateApartmentInput = async (
  data: SaveApartmentInput,
): Promise<Either<Record<string, string>, true>> => {
  try {
    await apartmentSchema.validate(data, { abortEarly: false })
    return right(true)
  } catch (err) {
    const yupError = err as ValidationError

    const errors: Record<string, string> = {}

    yupError.inner.forEach((error) => {
      errors[error.path] = error.message
    })
    return left(errors)
  }
}
