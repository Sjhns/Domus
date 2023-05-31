import { ApartmentModel } from '@/application/contracts/apartment-model'
import { SaveApartmentDTOInput } from '@/application/dtos/input-save-apartment'
import { ApartmentOutput } from '@/application/dtos/output-apartment'

import { ApartmentRepositoryContract } from '@/application/contracts/apartment-repository'

export class ApartmentRepositoryMemory
  implements ApartmentRepositoryContract<ApartmentModel, ApartmentOutput>
{
  private database: ApartmentModel[] = []

  async save(input: SaveApartmentDTOInput): Promise<ApartmentModel> {
    this.database.push(input)
    return input
  }

  async findAll(): Promise<ApartmentOutput[] | undefined> {
    const apartment = this.database

    if (!apartment) {
      return undefined
    }

    const schemaOutput = apartment.map((apartment) => {
      return {
        acceptsRoommates: apartment.acceptsRoommates,
        address: apartment.address,
        id: apartment.id,
        numberOfBathrooms: apartment.numberOfBathrooms,
        numberOfRooms: apartment.numberOfRooms,
        rent: apartment.rent,
        size: apartment.size,
        vacancies: apartment.vacancies,
        maxRoommates: apartment.maxRoommates,
      }
    })

    return schemaOutput
  }

  async findOne(id: string): Promise<ApartmentOutput | undefined> {
    const apartment = this.database.find((user) => user.id === id)

    if (!apartment) {
      return undefined
    }

    const schemaOutput = {
      acceptsRoommates: apartment.acceptsRoommates,
      address: apartment.address,
      id: apartment.id,
      numberOfBathrooms: apartment.numberOfBathrooms,
      numberOfRooms: apartment.numberOfRooms,
      rent: apartment.rent,
      size: apartment.size,
      vacancies: apartment.vacancies,
      maxRoommates: apartment.maxRoommates,
    }

    return schemaOutput
  }

  async update(
    id: string,
    input: SaveApartmentDTOInput,
  ): Promise<ApartmentModel> {
    const index = this.database.findIndex((apartment) => apartment.id === id)

    if (index !== -1) {
      this.database[index] = input
      return input
    }
  }

  async remove(id: string): Promise<void> {
    const apartment = this.database.find((user) => user.id === id)
    const index = this.database.indexOf(apartment)
    if (index !== -1) {
      this.database.splice(index, 1)
    }
  }
}
