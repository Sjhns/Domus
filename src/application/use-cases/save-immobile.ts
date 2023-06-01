import { SaveImmobileDTOInput } from '../dtos/input-save-immobile'
import { ImmobileOutput } from '../dtos/output-immobile'
import { randomUUID } from 'crypto'
import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileModel } from '../contracts/immobile-model'
import { SaveApartmentUseCaseContract } from '@/domain/contracts/apartment-use-cases'
import { Immobile } from '@/domain/entities/immobile'

export class SaveApartmentUseCase implements SaveApartmentUseCaseContract {
  constructor(
    private readonly apartmentRepository: ImmobileRepositoryContract<
      ImmobileModel,
      ImmobileOutput
    >,
  ) {}

  async execute(input: SaveImmobileDTOInput): Promise<ImmobileOutput> {
    const schemaInput = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...input,
    }

    const apartment = new Immobile(schemaInput)

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
