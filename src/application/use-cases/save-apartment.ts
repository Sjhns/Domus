import { Apartment } from '@/domain/entities/apartment'
import { SaveApartmentDTOInput } from '../dtos/input-save-apartment'
import { SaveApartmentOutput } from '../dtos/output-save-apartment'
import { randomUUID } from 'crypto'
import { ApartmentRepositoryContract } from '@/domain/repository/apartment-repository'

export class SaveApartmentUseCase {
  constructor(
    private readonly apartmentRepository: ApartmentRepositoryContract,
  ) {}

  async execute(input: SaveApartmentDTOInput): Promise<SaveApartmentOutput> {
    const schema = {
      id: randomUUID(),
      ...input,
    }
    const apartment = new Apartment(schema)
    const output = {
      acceptsRoommates: apartment.props.acceptsRoommates,
      address: apartment.props.address,
      id: apartment.props.id,
      numberOfBathrooms: apartment.props.numberOfBathrooms,
      numberOfRooms: apartment.props.numberOfRooms,
      rent: apartment.props.rent,
      size: apartment.props.size,
      vacancies: apartment.props.vacancies,
      maxRoommates: apartment.props.maxRoommates,
    }
    return output
  }
}
