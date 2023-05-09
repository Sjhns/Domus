import { SaveApartment } from '@/core/use-cases/save-apartment'
import { Apartment } from '../../core/entities/apartment'
import { SaveApartmentRepository } from '../contracts/save-apartment-repository'

import { isLeft } from 'fp-ts/Either'
import { validateApartmentInput } from '../validators/apartment-schema'
import { SaveApartmentInput } from '../types/save-apartment-input'
import { InvalidInputError } from '../errors/invalid-input'

export class SaveApartmentService implements SaveApartment {
  constructor(private readonly apartmentRepository: SaveApartmentRepository) {}

  async save(apartmentInput: SaveApartmentInput): Promise<Apartment | any> {
    const validationResult = await validateApartmentInput(apartmentInput)

    if (isLeft(validationResult)) {
      const errorMessages = validationResult.left
      const templateMessageError = {
        erros: errorMessages,
        ok: false,
        eventTime: new Date().toLocaleString('pt-BR'),
      }
      throw new InvalidInputError('Dados invalidos.', templateMessageError)
    }

    const apartment = await this.apartmentRepository.saveApartment(
      apartmentInput,
    )

    return apartment
  }
}

// const controller = async () => {
//   const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
//   const saveApartmentService = new SaveApartmentService(
//     apartmentRepositoryMemory,
//   )

//   console.log(await saveApartmentService.save(property))
// }

// controller()
