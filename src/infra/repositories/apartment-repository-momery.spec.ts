import { describe, expect, it } from 'vitest'
import { ApartmentRepositoryMemory } from './apartment-repository-momery'

describe('Apartment repository', () => {
  const dataNewApartment = {
    id: 'sdsskslskksl',
    size: 50,
    numberOfRooms: 2,
    numberOfBathrooms: 1,
    address: 'rua ramiro pimentel, avenida bem querer, 2563',
    rent: 600,
  }

  const apartmentRepositoryMemory = new ApartmentRepositoryMemory()

  it('Should register new apartment', async () => {
    const result = await apartmentRepositoryMemory.saveApartment(
      dataNewApartment,
    )

    expect(result).toBeTruthy()
    expect(result).toBeDefined()
    expect(result).toStrictEqual(dataNewApartment)
  })

  it('Should return all apartments', async () => {
    const apartments = await apartmentRepositoryMemory.getAllApartments()

    expect(apartments).toBeTruthy()
    expect(apartments).toEqual(
      expect.arrayContaining([expect.objectContaining(dataNewApartment)]),
    )
  })
})
