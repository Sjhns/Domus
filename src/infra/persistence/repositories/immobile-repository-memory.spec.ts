import { describe, it, expect } from 'vitest'
import { ImmobileRepositoryMemory } from './immobile-repository-memory'

describe('Immobile repository memory', () => {
  const immobileRepositoryMemory = new ImmobileRepositoryMemory()
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

  const immobileDataUpated = {
    ...immobileData,
    acceptsRoommates: true,
    maxRoommates: 2,
  }

  it('should add a new immobile to the database', async () => {
    const output = await immobileRepositoryMemory.save(immobileData)

    expect(output.id).toBeDefined()
    expect(output.landlord).toContain(immobileData.landlord)
  })

  it('should return all immobile from the database', async () => {
    const output = await immobileRepositoryMemory.findAll()

    expect(output?.length).toBeLessThanOrEqual(1)
  })

  it('should return the immobile with the given ID', async () => {
    const output = await immobileRepositoryMemory.findOne('1')

    expect(output.location).toStrictEqual(immobileData.location)
    expect(output.description).toContain(immobileData.description)
  })

  it('should update the immobile with the given ID', async () => {
    const output = await immobileRepositoryMemory.update(
      '1',
      immobileDataUpated,
    )

    expect(output).toBeDefined()
    expect(output.maxRoommates).toEqual(2)
    expect(output.acceptsRoommates).toBeTruthy()
  })

  it('Should check if the immobile has been updated', async () => {
    const output = await immobileRepositoryMemory.findOne(immobileDataUpated.id)

    expect(output).toBeDefined()
    expect(output).toStrictEqual(immobileDataUpated)
  })

  it('should remove the immobile with the given ID from the database', async () => {
    await immobileRepositoryMemory.remove('1')
    const output = await immobileRepositoryMemory.findOne('1')

    expect(output).toBeUndefined()
  })
})
