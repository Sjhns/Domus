import { ImmobileModel } from '@/application/contracts/immobile-model'
import {
  Landlord,
  Location,
} from '@/application/dtos/immobile-registration-input'
import { ImmobileSchemaOutput } from '@/application/dtos/immobile-schema-output'

export class ImmobileAdapter {
  static toDomainList(immobile: ImmobileModel[]): ImmobileSchemaOutput[] {
    return immobile.map((immobile) => this.toDomain(immobile))
  }

  static toDomain(immobile: ImmobileModel): ImmobileSchemaOutput {
    const location: Location = this.adaptAddress(immobile.location)
    const landlord: Landlord = this.adaptLandlord(immobile.landlord)

    return {
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
