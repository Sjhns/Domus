import { describe, expect, it } from 'vitest'
import { SaveApartmentUseCase } from './save-immobile'
import { ApartmentRepositoryMemory } from '../../infra/persistence/repositories/apartment-repository-memory'

describe('Save apartment use case', () => {
  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
  const saveApartmentUseCase = new SaveApartmentUseCase(
    apartmentRepositoryMemory,
  )
  it('Should save an apartment not accepts roommates', async () => {
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
      acceptsRoommates: false,
    }

    const output = await saveApartmentUseCase.execute(immobileData)
    expect(output.id).toBeDefined()
    expect(output.maxRoommates).toBeUndefined()
    expect(output).toBeDefined()
  })
  it('Should save an apartment that accepts roommates', async () => {
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

    const output = await saveApartmentUseCase.execute(immobileData)
    expect(output.id).toBeDefined()
    expect(output.maxRoommates).toBeDefined()
    expect(output.maxRoommates).toEqual(immobileData.maxRoommates)
    expect(output).toBeDefined()
  })
})
