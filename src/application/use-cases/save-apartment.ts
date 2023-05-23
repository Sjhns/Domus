import { Apartment } from '@/domain/entities/apartment'
import { SaveApartmentDTOInput } from '../dtos/input-save-apartment'
import { SaveApartmentOutput } from '../dtos/output-save-apartment'

export class SaveApartmentUseCase {
  async execute(input: SaveApartmentDTOInput): Promise<SaveApartmentOutput> {
    const apartment = new Apartment(input)
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
