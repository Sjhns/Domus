import { describe, expect, it } from 'vitest'
import { ImmobileRegistrationUseCase } from './immobile-registration'
import { ImmobileRepositoryMemory } from '../../infra/persistence/repositories/immobile-repository-memory'

describe('Save immobile use case', () => {
  const immobileRepositoryMemory = new ImmobileRepositoryMemory()
  const immobileRegistrationUseCase = new ImmobileRegistrationUseCase(
    immobileRepositoryMemory,
  )
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

  it('Should save an immobile not accepts roommates', async () => {
    const output = await immobileRegistrationUseCase.execute(immobileData)
    expect(output.id).toBeDefined()
    expect(output.maxRoommates).toBeUndefined()
    expect(output).toBeDefined()
  })
  it('Should save an immobile that accepts roommates', async () => {
    const immobileDataAcceptsRoommates = {
      ...immobileData,
      acceptsRoommates: true,
      maxRoommates: 2,
    }

    const output = await immobileRegistrationUseCase.execute(
      immobileDataAcceptsRoommates,
    )
    expect(output.id).toBeDefined()
    expect(output.maxRoommates).toBeDefined()
    expect(output.maxRoommates).toEqual(
      immobileDataAcceptsRoommates.maxRoommates,
    )
    expect(output).toBeDefined()
  })
})
