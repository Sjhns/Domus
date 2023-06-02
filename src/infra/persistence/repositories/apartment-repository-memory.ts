import { SaveImmobileDTOInput } from '@/application/dtos/input-save-immobile'

import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileModel } from '@/application/contracts/immobile-model'
import { ImmobileOutput } from '@/application/dtos/output-immobile'

export class ApartmentRepositoryMemory implements ImmobileRepositoryContract {
  private database: ImmobileModel[] = []

  async save(input: SaveImmobileDTOInput): Promise<ImmobileOutput> {
    this.database.push(input)
    return input
  }

  async findAll(): Promise<ImmobileOutput[] | undefined> {
    const immobile = this.database

    if (!immobile) {
      return undefined
    }

    const schemaOutput: ImmobileOutput[] = immobile.map((immobile) => {
      const location = {
        zipCode: immobile.location.zipCode,
        state: immobile.location.state,
        city: immobile.location.city,
        neighborhood: immobile.location.neighborhood,
        street: immobile.location.street,
        number: immobile.location.number,
      }

      const landlord = {
        name: immobile.landlord.name,
        email: immobile.landlord.email,
        phone: immobile.landlord.phone,
        occupation: immobile.landlord.occupation,
      }

      const immobileOutput = {
        id: immobile.id,
        createdAt: immobile.createdAt,
        updatedAt: immobile.updatedAt,
        images: immobile.images,
        price: immobile.price,
        landlord,
        location,
        type: immobile.type,
        squareMeters: immobile.squareMeters,
        bedrooms: immobile.bathrooms,
        bathrooms: immobile.bathrooms,
        parkingSpaces: immobile.parkingSpaces,
        description: immobile.description,
        acceptsRoommates: immobile.acceptsRoommates,
        maxRoommates: immobile.maxRoommates,
      }

      return immobileOutput
    })

    return schemaOutput
  }

  async findOne(id: string): Promise<ImmobileOutput | undefined> {
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
    input: SaveImmobileDTOInput,
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
