import { ImmobileModel } from '@/application/contracts/immobile-model'
import {
  ImmobileOutput,
  Landlord,
  Location,
} from '@/application/dtos/output-immobile'

export class ImmobileAdapter {
  static adaptaArray(immobile: ImmobileModel[]): ImmobileOutput[] {
    return immobile.map((immobile) => {
      const location: Location = this.adaptAddress(immobile.location)
      const landlord: Landlord = this.adaptLandlord(immobile.landlord)

      const immobileOutput: ImmobileOutput = {
        id: immobile.id,
        createdAt: immobile.createdAt,
        updatedAt: immobile.updatedAt,
        images: immobile.images,
        price: immobile.price,
        landlord,
        location,
        type: immobile.type,
        squareMeters: immobile.squareMeters,
        bedrooms: immobile.bedrooms,
        bathrooms: immobile.bathrooms,
        parkingSpaces: immobile.parkingSpaces,
        description: immobile.description,
        acceptsRoommates: immobile.acceptsRoommates,
        maxRoommates: immobile.maxRoommates,
      }

      return immobileOutput
    })
  }

  static adaptaOne(immobile: ImmobileModel): ImmobileOutput {
    const location: Location = this.adaptAddress(immobile.location)
    const landlord: Landlord = this.adaptLandlord(immobile.landlord)

    const immobileOutput: ImmobileOutput = {
      id: immobile.id,
      createdAt: immobile.createdAt,
      updatedAt: immobile.updatedAt,
      images: immobile.images,
      price: immobile.price,
      landlord,
      location,
      type: immobile.type,
      squareMeters: immobile.squareMeters,
      bedrooms: immobile.bedrooms,
      bathrooms: immobile.bathrooms,
      parkingSpaces: immobile.parkingSpaces,
      description: immobile.description,
      acceptsRoommates: immobile.acceptsRoommates,
      maxRoommates: immobile.maxRoommates,
    }

    return immobileOutput
  }

  private static adaptAddress(location: Location): Location {
    return {
      zipCode: location.zipCode,
      state: location.state,
      city: location.city,
      neighborhood: location.neighborhood,
      street: location.street,
      number: location.number,
    }
  }

  private static adaptLandlord(landlord: Landlord): Landlord {
    return {
      name: landlord.name,
      email: landlord.email,
      phone: landlord.phone,
      occupation: landlord.occupation,
    }
  }
}
