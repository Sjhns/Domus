import { describe, it, expect } from 'vitest'
import { ApartmentRepositoryMemory } from './apartment-repository-memory'
import { randomUUID } from 'crypto'

describe('Apartment repository memory', () => {
  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()
  let outputApartmentId = ''
  const dataApartment = {
    id: randomUUID(),
    size: 50,
    numberOfRooms: 2,
    numberOfBathrooms: 1,
    address: 'Alameda Franca, 579 - Jardim Bem Querer, Salvador, Bahia, Brasil',
    rent: 600,
    vacancies: 1,
    acceptsRoommates: false,
  }

  const dataApartmentUpdated = {
    ...dataApartment,
    id: outputApartmentId,
    acceptsRoommates: true,
    maxRoommates: 2,
  }

  it('should add a new apartment to the database', async () => {
    const output = await apartmentRepositoryMemory.save(dataApartment)
    outputApartmentId = output.id!

    expect(output.id).toBeDefined()
    expect(output).toContain(dataApartment)
  })

  it('should return all apartments from the database', async () => {
    const output = await apartmentRepositoryMemory.findAll()

    expect(output?.length).toBeLessThanOrEqual(1)
  })

  it('should return the apartment with the given ID', async () => {
    const output = await apartmentRepositoryMemory.findOne(outputApartmentId)

    expect(output.address).toBe(dataApartment.address)
    expect(output).toContain(dataApartment)
  })

  it('should update the apartment with the given ID', async () => {
    const output = await apartmentRepositoryMemory.update(
      outputApartmentId,
      dataApartmentUpdated,
    )

    expect(output).toBeDefined()
    expect(output.maxRoommates).toEqual(2)
    expect(output.acceptsRoommates).toBeTruthy()
  })

  it('Should check if the apartment has been updated', async () => {
    const output = await apartmentRepositoryMemory.findOne(
      dataApartmentUpdated.id,
    )

    expect(output).toBeDefined()
    expect(output).toStrictEqual(dataApartmentUpdated)
  })

  it('should remove the apartment with the given ID from the database', async () => {
    await apartmentRepositoryMemory.remove(outputApartmentId)
    const output = await apartmentRepositoryMemory.findOne(outputApartmentId)

    expect(output).toBeUndefined()
  })
})
