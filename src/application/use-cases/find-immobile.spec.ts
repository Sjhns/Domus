import { beforeAll, describe, expect, it } from 'vitest'
import { ImmobileRepositoryMemory } from '../../infra/persistence/repositories/immobile-repository-memory'
import { FindImmobileUseCase } from './find-immobile'

describe('Find immobile use case', () => {
  const immobileRepositoryMemory = new ImmobileRepositoryMemory()
  const findImmobileUseCase = new FindImmobileUseCase(immobileRepositoryMemory)

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
    squareMeters: 64,
    bedrooms: 1,
    bathrooms: 2,
    parkingSpaces: 1,
    description: 'Cozy apartment in downtown',
    acceptsRoommates: false,
  }

  beforeAll(async () => {
    await immobileRepositoryMemory.save(immobileData)
  })

  it('Should return all immobile', async () => {
    const output = await findImmobileUseCase.all()

    expect(output).toBeDefined()
    expect(output?.length).toBe(1)
    expect(output[0].id).toBe(immobileData.id)
  })

  it('should return a specific immobile by ID', async () => {
    const output = await findImmobileUseCase.one(immobileData.id)

    expect(output).toBeDefined()
    expect(output).toMatchObject(immobileData)
    expect(output?.id).toBe(immobileData.id)
  })

  it('should return undefined if immobile is not found', async () => {
    const output = await findImmobileUseCase.one('3')

    expect(output).toBeUndefined()
  })
})
