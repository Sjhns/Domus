import { Apartment } from '@/domain/entities/apartment'
import { SaveApartmentDTOInput } from '../dtos/input-save-apartment'
import { ApartmentOutput } from '../dtos/output-apartment'
import { randomUUID } from 'crypto'
import { ApartmentRepositoryContract } from '@/application/contracts/apartment-repository'
import { ApartmentModel } from '../contracts/apartment-model'
import { SaveApartmentUseCaseContract } from '@/domain/contracts/apartment-useCase'

export class SaveApartmentUseCase implements SaveApartmentUseCaseContract {
  constructor(
    private readonly apartmentRepository: ApartmentRepositoryContract<
      ApartmentModel,
      ApartmentOutput
    >,
  ) {}

  async execute(input: SaveApartmentDTOInput): Promise<ApartmentOutput> {
    const schemaInput = {
      id: randomUUID(),
      ...input,
    }
    const apartment = new Apartment(schemaInput)

    const output = await this.apartmentRepository.save(apartment.props)

    const schemaOutput = {
      acceptsRoommates: output.acceptsRoommates,
      address: output.address,
      id: output.id,
      numberOfBathrooms: output.numberOfBathrooms,
      numberOfRooms: output.numberOfRooms,
      rent: output.rent,
      size: output.size,
      vacancies: output.vacancies,
      maxRoommates: output.maxRoommates,
    }
    return schemaOutput
  }
}
