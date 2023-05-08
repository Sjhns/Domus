import { SaveApartment } from '@/core/use-cases/save-apartment'
import { Apartment } from '../../core/entities/apartment'
import { SaveApartmentRepository } from '../contracts/save-apartment-repository'

import { object, string, number, ValidationError } from 'yup'

import { Either, isLeft, left, right } from 'fp-ts/Either'
import { ApartmentRepositoryMemory } from '@/infra/repositories/apartment-repository-momery'

type SaveApartmentInput = {
  id: string
  address: string
  size: number
  numberOfRooms: number
  numberOfBathrooms: number
  rent: number
}

const apartmentSchema = object({
  id: string().required(),
  address: string().required(),
  size: number().required(),
  numberOfRooms: number().required(),
  numberOfBathrooms: number().required(),
  rent: number().required(),
})

const validateApartmentInput = async (
  data: SaveApartmentInput,
): Promise<Either<Record<string, string>, boolean>> => {
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

export class SaveApartmentService implements SaveApartment {
  constructor(private readonly apartmentRepository: SaveApartmentRepository) {}

  async save(
    apartmentInput: SaveApartmentInput,
  ): Promise<Apartment | Record<string, string>> {
    const validationResult = await validateApartmentInput(property)

    if (isLeft(validationResult)) {
      const errorMessages = validationResult.left
      return errorMessages
    }

    const apartment = await this.apartmentRepository.saveApartment(
      apartmentInput,
    )

    return apartment
  }
}

const property = {
  id: '123',
  address: 'Rua das Flores, 123',
  size: 100,
  numberOfRooms: 3,
  // numberOfBathrooms: 2,
  // rent: 2000,
}

const controller = async () => {
  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
  const saveApartmentService = new SaveApartmentService(
    apartmentRepositoryMemory,
  )

  console.log(await saveApartmentService.save(property))
}

controller()
