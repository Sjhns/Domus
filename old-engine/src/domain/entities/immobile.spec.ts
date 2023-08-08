import { describe, expect, it } from 'vitest'
import { Immobile } from './immobile'

describe('Entity immobile test', () => {
  it('Should create an immobile', () => {
    const immobileData = {
      id: '1',
      createdAt: '2023-06-01',
      updatedAt: '2023-06-01',
      images: ['image1.jpg', 'image2.jpg'],
      price: 2000,
      landlord: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123456789',
        occupation: 'Real Estate Agent',
      },
      location: {
        zipCode: '12345-678',
        state: 'California',
        city: 'Los Angeles',
        neighborhood: 'Downtown',
        street: 'Main Street',
        number: '123',
      },
      type: 'Apartment',
      squareMeters: 80,
      bedrooms: 2,
      bathrooms: 1,
      parkingSpaces: 1,
      description: 'Cozy apartment in downtown',
      acceptsRoommates: true,
      maxRoommates: 2,
    }
    const immobile = new Immobile(immobileData)

    expect(immobile).toBeInstanceOf(Immobile)
    expect(immobile.props).toStrictEqual(immobileData)
  })

  it('should throw an error when invalid properties are passed', () => {
    const invalidProps = {
      id: '1',
      createdAt: '2023-06-01',
      updatedAt: '2023-06-01',
      images: ['image1.jpg', 'image2.jpg'],
      price: 2000,
      landlord: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123456789',
        occupation: 'Real Estate Agent',
      },
      location: {
        zipCode: '12345-678',
        state: 'California',
        city: 'Los Angeles',
        neighborhood: 'Downtown',
        street: 'Main Street',
        number: '123',
      },
      type: 'Apartment',
      squareMeters: 0,
      bedrooms: 0,
      bathrooms: 0,
      parkingSpaces: 0,
      description: 'Cozy apartment in downtown',
      acceptsRoommates: false,
    }

    expect(() => new Immobile(invalidProps)).toThrowError(
      'Informações não são válidas',
    )
  })
})
