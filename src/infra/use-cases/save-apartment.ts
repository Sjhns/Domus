import { SaveApartmentInterface } from '@/core/use-cases/save-apartment'
import { Apartment } from '../../core/entities/apartment'
import { ApartmentRepositoryInterface } from '@/core/repositories/apartment-repository'

type SaveApartmentInput = {
  id: string
  address: string
  size: number
  numberOfRooms: number
  numberOfBathrooms: number
  rent: number
  availableDate: string | Date
}

type ApartmentObjectOutput = {
  id: string
  address: string
  size: number
  numberOfRooms: number
  numberOfBathrooms: number
  rent: number
  availableDate: string | Date
}

export class SaveApartmentUseCase implements SaveApartmentInterface {
  constructor(
    private readonly apartmentRepository: ApartmentRepositoryInterface,
  ) {}

  async insert(input: SaveApartmentInput): Promise<ApartmentObjectOutput> {
    const newApartment = new Apartment(input)
    const apartment = await this.apartmentRepository.save(newApartment)

    return convertApartmentEntityToObject(apartment)
  }
}

const convertApartmentEntityToObject = (apartment: Apartment) => {
  const apartmentObject = { ...apartment.props }
  return apartmentObject
}
